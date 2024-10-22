import React from 'react'

interface Props {
    condition: any;
    children: React.ReactNode;
}

export default function NullableComponent({ children, condition }: Props) {
    if (!condition) return null;
    return <>{children}</>;
}
