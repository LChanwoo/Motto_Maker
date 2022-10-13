import { useEffect } from "react";
import fstyle from "./final.module.css";
const Preview = ({ color, Text1, Text2, Text3, Text4, nickName, href, setUrl, textColor }: any) => {
    const componetDidUpdate = () => {
        // console.log(href)
        const canvas = href.current;
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 546);
        if (color == '#000001') {
            gradient.addColorStop(0, '#FFEDBF')
            gradient.addColorStop(1, '#FFCAE3')
            ctx.fillStyle = gradient;
        } else if (color === '#000002') {
            gradient.addColorStop(0, '#79cfff')
            gradient.addColorStop(0.79, '#aa7de3')
            ctx.fillStyle = gradient;
        } else if (color === '#000003') {
            gradient.addColorStop(0, '#b9e2ff')
            gradient.addColorStop(1, '#c1ffc1')
            ctx.fillStyle = gradient;
        } else {
            ctx.fillStyle = color;
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        //로고
        const ctx3 = canvas.getContext("2d");
        const logo = new Image();
        logo.src = `${process.env.PUBLIC_URL}/img/moto_logo_10px.png`;
        ctx3.drawImage(logo, (512 - 80) * 2, 25 * 2, 112, 28);

        const texts = [Text1, Text2, Text3, Text4];
        setFont(canvas, texts, nickName, {
            // color: textColor,
            color: "#272A32",
            size: "50",
            font: "sans-serif"
        });
        setUrl(canvas.toDataURL());

    }
    const setFont = (canvas: any, texts: string[], nickName: string, args: any) => {
        //폰트 옵션
        canvas.style.letterSpacing = -0.2 + "em";

        // 텍스트
        const ctx = canvas.getContext("2d");
        const { color, size, font } = args;
        ctx.font = `bold ${size}px ${font}`;
        ctx.textAlign = "center";
        // ctx.textAlign = "start";
        ctx.fillStyle = color;
        for (let i = 0; i < texts.length; i++) {
            ctx.fillText(texts[i], 256 * 2, (85 + 39 * i) * 2);
        }

        //유저 닉네임
        const ctx2 = canvas.getContext("2d");
        ctx2.font = "32px sans-serif";
        ctx2.textAlign = "center";
        ctx2.fillStyle = "#272A32";
        ctx2.fillText(`- ${nickName} -`, 256 * 2, 250 * 2);


    };

    useEffect(() => {
        componetDidUpdate();
    }, [color, Text1, Text2, Text3, Text4, nickName, textColor]);

    return (
        <canvas ref={href} width="1024" height="546" />
    );
}

export default Preview;