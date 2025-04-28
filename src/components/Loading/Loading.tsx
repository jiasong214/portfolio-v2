import React, { useState, useEffect, useRef, ReactNode } from "react";
import styles from "./Loading.module.scss";
import { motion } from "framer-motion";

const MIN_LOADING_TIME = 1000;

interface LoadingProps {
  children: ReactNode;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const Loading = ({
  children,
  loading,
  setLoading,
}: LoadingProps): React.ReactElement => {
  const [progress, setProgress] = useState(0);
  const targetProgress = useRef(0);
  const rafId = useRef<number>(0);

  const loadImages = async () => {
    const images = Array.from(document.images);
    const imageLoadPromise = Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      })
    );

    const minTimePromise = new Promise<void>((resolve) =>
      setTimeout(resolve, MIN_LOADING_TIME)
    );

    await Promise.all([imageLoadPromise, minTimePromise]);
  };

  useEffect(() => {
    const animate = () => {
      setProgress((prev) => {
        const diff = targetProgress.current - prev;
        if (Math.abs(diff) < 0.1) return targetProgress.current;
        return prev + diff * 0.05; // soft
      });
      rafId.current = requestAnimationFrame(animate);
    };
    animate();

    loadImages().then(() => {
      targetProgress.current = 100;
      setTimeout(() => {
        setLoading(false);
        if (rafId.current) cancelAnimationFrame(rafId.current);
      }, 1500);
    });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <motion.p
        className={styles.percent}
        animate={{ opacity: loading ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {Math.floor(progress)} / 100
      </motion.p>
      {children}
    </>
  );
};

export default Loading;
