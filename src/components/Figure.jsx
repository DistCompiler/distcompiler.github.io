import {createSignal} from 'solid-js'

export default function Figure({src,alt}) {
    let [zoom,setZoom] = createSignal(false)

    function toggleZoom() {
        setZoom(!zoom())
    }
    
    return (<>
        <div class="not-prose w-fit outline outline-2 outline-slate-800 m-4">
            <div class="outline outline-2 outline-slate-800 pl-2">{alt}</div>
            <img src={src} alt={alt} class="cursor-zoom-in max-h-60" on:click={toggleZoom} on:keypress={toggleZoom} />
        </div>
        <div class={`not-prose fixed top-0 left-0 w-screen h-screen grid grid-cols-1 grid-rows-1 place-items-center bg-slate-400/50 cursor-zoom-out${zoom() ? "" : " hidden"}`} on:click={toggleZoom} on:keypress={toggleZoom}>
            <div class="max-w-[75%] max-h-[75%] overflow-scroll">
                <div class="sticky top-0 left-0 outline outline-4 outline-slate-800 w-full bg-slate-800 flex flex-row">
                    <span class="grow text-white pl-2">{alt}</span>
                    <span class="text-white cursor-pointer pr-2">&#10005;</span>
                </div>
                <img src={src} alt={alt} class="outline outline-4 outline-slate-800 object-contain" />
            </div>
        </div>
    </>)
}
