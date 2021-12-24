<script>
import Icon from "@iconify/svelte";
export let icon;
export let text = '';
// text = 'Figma'
export let color;
function convertColor(hex, opacity) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    }
let bgColor = convertColor(color, 10);
</script>
<div class="flex items-center p-2 bg-opacity-20 w-max rounded-full" style={`background-color: ${bgColor}`}>
    <Icon {icon} width="24" height="24" {color}/>
    {#if text} 
    <div class="text-base ml-2 mr-1" style={'color: ' + color}>
        {text}
    </div>
    {/if}
</div>