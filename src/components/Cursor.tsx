import { useEffect, useRef } from "react";

export const Cursor = () => {
    const delay = 15;
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(true);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const dot = useRef(null);
    const dotOutline = useRef(null);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", mouseOverEvent);
        document.addEventListener("mouseup", mouseOutEvent);
        document.addEventListener("mousemove", mouseMoveEvent);
        document.addEventListener("mouseenter", mouseEnterEvent);
        document.addEventListener("mouseleave", mouseLeaveEvent);

        animateDotOutline();

        return () => {
            document.removeEventListener("mousedown", mouseOverEvent);
            document.removeEventListener("mouseup", mouseOutEvent);
            document.removeEventListener("mousemove", mouseMoveEvent);
            document.removeEventListener("mouseenter", mouseEnterEvent);
            document.removeEventListener("mouseleave", mouseLeaveEvent);

            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
            dotOutline.current.style.opacity = 1;
        } else {
            dotOutline.current.style.opacity = 0;
        }
    };

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dotOutline.current.style.transform = "translate(-50%, -50%) scale(1.5)";
        } else {
            dotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
        }
    };

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
    };

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    };

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    };

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    };

    const mouseMoveEvent = (e) => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;
    };

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;

        dotOutline.current.style.top = _y.current + "px";
        dotOutline.current.style.left = _x.current + "px";
        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    return (
        <>
            <div ref={dotOutline} className="cursor-dot-outline"></div>
            <div ref={dot} className="cursor-dot"></div>
        </>
    );
};
