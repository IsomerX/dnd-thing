"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
type Props = {
    content: string;
    position: number;
    ref: React.RefObject<HTMLDivElement>;
};

const Card = ({ content, position }: Props) => {
    const [isDragging, setIsDragging] = useState(false);
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        const box = document.getElementById(`box-${position + 1}`);
        if (box) setDomReady(true);
    }, [position]);
    return (
        domReady &&
        createPortal(
            <motion.div
                className={`w-full h-full rounded-lg border-2 border-white/20 grid place-items-center font-bold text-lg cursor-pointer ${
                    isDragging ? "border-blue-500" : "border-white/20"
                }`}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                drag
            >
                {content}
            </motion.div>,
            document.getElementById(`box-${position + 1}`)!,
            `box-${position + 1}`
        )
    );
};

export default Card;
