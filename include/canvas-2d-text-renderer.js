/**
 * @typedef {!{
 *              renderEvent:function(SSASubtitleEvent,number):void,
 *              setDPI:function(number):void,
 *              getOffset:function():Array<number>,
 *              getDimensions:function():Array<number>,
 *              getImage:function():HTMLCanvasElement
 *          }}
 */
var Canvas2DTextRenderer;

/**
 * @type {function(new:Canvas2DTextRenderer)}
 */
sabre.Canvas2DTextRenderer = function () {};
