import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tags");

    if (!tag) {
        return NextResponse.json({
            status: 400,
            message: "tag is required",
        })
    }
    revalidateTag(tag);

    return NextResponse.json({
        revalidate: true,
        now: Date.now(),
        status: 200,
        message: "success",
    })
}