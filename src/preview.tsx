import { useEffect, useState } from "react";
import { JsxElement } from "typescript";




const Preview = ({ color, text, userName, href, updateCanvas, setUrl, textColor }: any) => {
    const componetDidUpdate = () => {
        console.log(href)
        const canvas = href.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setFont(canvas, text, userName, {
            color: textColor,
            size: "26px",
            font: "Arial"
        });
        setUrl(canvas.toDataURL());
        // const url = canvas.toDataURL();
        // console.log(canvas.toDataURL());
        // href !== url && updateCanvas(url);
    }
    const setFont = (canvas: any, text: string, userName: string, args: any) => {
        const texts = text.split(",_");
        const ctx = canvas.getContext("2d");
        const ctx2 = canvas.getContext("2d");
        const { color, size, font } = args;
        ctx.font = `${size}px ${font}`;
        ctx.textAlign = "center";
        // ctx.textAlign = "start";
        ctx.fillStyle = color;
        for (let i = 0; i < texts.length; i++) {
            ctx.fillText(texts[i], 250, 100 + 80 * i);
        }
        ctx2.font = "normal bolder 30px Arial";
        ctx2.textAlign = "right";
        ctx2.fillStyle = "black";
        ctx2.fillText(`- ${userName}`, 450, 440);
        // ctx2.fillText(`- ${userName}`, 225, 440);

    };

    useEffect(() => {
        componetDidUpdate();
    }, [color, text, userName, textColor]);

    return (
        <canvas ref={href} className="previewCanvas" width="500" height="500" />
    );
}

export default Preview;