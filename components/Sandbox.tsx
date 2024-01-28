import React, {ProfilerOnRenderCallback, useLayoutEffect, useState} from "react";

type Props = {
    id: string,
    children: React.ReactNode,
    onRender: ProfilerOnRenderCallback
}

export const RenderTimer = ({id, children, onRender}: Props) => {
    const [start] = useState(Date.now());

    useLayoutEffect(() => {
        const end = Date.now();
        onRender(id, 'update', end - start, 0, 0, 0, new Set())
    }, []);

    return (
        children
    );
}
