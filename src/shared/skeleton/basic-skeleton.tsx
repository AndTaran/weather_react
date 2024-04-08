import {Skeleton} from "@mui/material";

interface ISkeletonProps {
    width: string,
    height: string
}

export function BasicSkeleton({width, height}: ISkeletonProps) {
    return (
        <Skeleton
            variant="rounded"
            animation="wave"
            width={width}
            height={height}
        />
    )
}