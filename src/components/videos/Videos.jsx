import Video from "../videos/Video";

export default function Videos() {
    return (
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            <Video/>
            <Video/>
            <Video/>
        </div>
    );
}
