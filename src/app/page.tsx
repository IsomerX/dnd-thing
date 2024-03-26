"use client";
import { useEffect, useRef, useState } from "react";
import Card from "./_components/card";
import { createPortal } from "react-dom";

const LayoutGrid = () => {
    const box1_r = useRef<HTMLDivElement>(null);
    const box2_r = useRef<HTMLDivElement>(null);
    const box3_r = useRef<HTMLDivElement>(null);
    const box4_r = useRef<HTMLDivElement>(null);

    return {
        portalElement: (
            <main className="min-h-screen grid grid-cols-2 gap-2 p-2">
                <div id="box-1" ref={box1_r}></div>
                <div id="box-2" ref={box2_r}></div>
                <div id="box-3" ref={box3_r}></div>
                <div id="box-4" ref={box4_r}></div>
            </main>
        ),
        refs: [box1_r, box2_r, box3_r, box4_r],
    };
};

export default function Home() {
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        setDomReady(true);
    }, []);

    const { portalElement: layoutPortalElement, refs } = LayoutGrid();
    return (
        <>
            {domReady
                ? createPortal(
                      layoutPortalElement,
                      document.getElementById("layout-grid")!
                  )
                : null}
            {new Array(4).fill(0).map((_, i) =>
                Card({
                    content: `Card ${i + 1}`,
                    position: i,
                    ref: refs[i],
                })
            )}
        </>
    );
}

