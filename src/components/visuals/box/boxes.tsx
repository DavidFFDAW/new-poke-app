import React from "react";

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
    title: string;
}

export default function RoundedBox({ title, children }: BoxProps) {
    return (
        <div className="rounded-box">
            <h3 className="title box-title">
                <strong>{title} </strong>
            </h3>
            {children}
        </div>
    );
}
export function RoundedBoxPad30({ title, children }: BoxProps) {
    return (
        <div className="rounded-box">
            <h3 className="title box-title">
                <strong>{title} </strong>
            </h3>
            <div className="flex center pad-30">{children}</div>
        </div>
    );
}

export function SimpleRoundBox(props: BoxProps) {
    return (
        <div className="rounded-box first" {...props}>
            <h3 className="title box-title">
                <strong>{props.title}</strong>
            </h3>
            <div className="body">{props.children}</div>
        </div>
    );
}
