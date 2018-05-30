/**
 * Image manipulation blocks
 */
//% weight=70 icon="\uf03e" color="#0E563B"
//% advanced=true
namespace images {
    //% blockId=screen_image_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% weight=100 group="Create"
    export function _spriteImage(img: Image) {
        return img
    }

    //% blockId=background_image_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.sizes="-1,-1"
    //% weight=100 group="Create"
    //% blockHidden=1
    export function _screenImage(img: Image) {
        return img
    }

    //% blockId=tilemap_image_picker block="%img"
    //% shim=TD_ID
    //% img.fieldEditor="sprite"
    //% img.fieldOptions.taggedTemplate="img"
    //% img.fieldOptions.decompileIndirectFixedInstances="true"
    //% img.fieldOptions.sizes="16,16;32,32;48,48;64,64;16,32;32,48"
    //% weight=100 group="Create"
    //% blockHidden=1
    export function _tileMapImage(img: Image) {
        return img
    }
    
    /**
     * An image
     * @param image the image
     */
    //% blockId=image_picker block="%image" shim=TD_ID
    //% image.fieldEditor="images"
    //% image.fieldOptions.columns=6
    //% image.fieldOptions.width=600
    //% weight=0 group="Create"
    export function _image(image: Image): Image {
        return image;
    }
}