//DOM

//Document object model- logical structure of page

document.head;

document.body;

window; //complete window of the screen.
window.screen;//screen property

document


var heading = document.getElementById('one');
undefined

heading.style.color = 'red';
"red"

heading.style.backgroundColor = 'grey';
"grey"

//Get document by Id
heading = document.getElementById('two');
//output - <h1 id=​"two">​Heading-2​</h1>​

//Changing the propery
heading.style
//output - CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}

heading.innerText = "Second Heading";
//output - "Second Heading"

var para = document.getElementById('para');
//output - undefined

para.style.fontSize = "24px";
//output - "24px"

var headings = document.getElementsByTagName('h1');
//output - undefined

headings[0].style.fontSize = "30px";
//output - "30px"

heading.style
//output - CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}alignContent: ""alignItems: ""alignSelf: ""alignmentBaseline: ""all: ""animation: ""animationDelay: ""animationDirection: ""animationDuration: ""animationFillMode: ""animationIterationCount: ""animationName: ""animationPlayState: ""animationTimingFunction: ""appearance: ""backdropFilter: ""backfaceVisibility: ""background: ""backgroundAttachment: ""backgroundBlendMode: ""backgroundClip: ""backgroundColor: ""backgroundImage: ""backgroundOrigin: ""backgroundPosition: ""backgroundPositionX: ""backgroundPositionY: ""backgroundRepeat: ""backgroundRepeatX: ""backgroundRepeatY: ""backgroundSize: ""baselineShift: ""blockSize: ""border: ""borderBlockEnd: ""borderBlockEndColor: ""borderBlockEndStyle: ""borderBlockEndWidth: ""borderBlockStart: ""borderBlockStartColor: ""borderBlockStartStyle: ""borderBlockStartWidth: ""borderBottom: ""borderBottomColor: ""borderBottomLeftRadius: ""borderBottomRightRadius: ""borderBottomStyle: ""borderBottomWidth: ""borderCollapse: ""borderColor: ""borderImage: ""borderImageOutset: ""borderImageRepeat: ""borderImageSlice: ""borderImageSource: ""borderImageWidth: ""borderInlineEnd: ""borderInlineEndColor: ""borderInlineEndStyle: ""borderInlineEndWidth: ""borderInlineStart: ""borderInlineStartColor: ""borderInlineStartStyle: ""borderInlineStartWidth: ""borderLeft: ""borderLeftColor: ""borderLeftStyle: ""borderLeftWidth: ""borderRadius: ""borderRight: ""borderRightColor: ""borderRightStyle: ""borderRightWidth: ""borderSpacing: ""borderStyle: ""borderTop: ""borderTopColor: ""borderTopLeftRadius: ""borderTopRightRadius: ""borderTopStyle: ""borderTopWidth: ""borderWidth: ""bottom: ""boxShadow: ""boxSizing: ""breakAfter: ""breakBefore: ""breakInside: ""bufferedRendering: ""captionSide: ""caretColor: ""clear: ""clip: ""clipPath: ""clipRule: ""color: ""colorInterpolation: ""colorInterpolationFilters: ""colorRendering: ""colorScheme: ""columnCount: ""columnFill: ""columnGap: ""columnRule: ""columnRuleColor: ""columnRuleStyle: ""columnRuleWidth: ""columnSpan: ""columnWidth: ""columns: ""contain: ""containIntrinsicSize: ""content: ""counterIncrement: ""counterReset: ""cssFloat: ""cssText: ""cursor: ""cx: ""cy: ""d: ""direction: ""display: ""dominantBaseline: ""emptyCells: ""fill: ""fillOpacity: ""fillRule: ""filter: ""flex: ""flexBasis: ""flexDirection: ""flexFlow: ""flexGrow: ""flexShrink: ""flexWrap: ""float: ""floodColor: ""floodOpacity: ""font: ""fontDisplay: ""fontFamily: ""fontFeatureSettings: ""fontKerning: ""fontOpticalSizing: ""fontSize: ""fontStretch: ""fontStyle: ""fontVariant: ""fontVariantCaps: ""fontVariantEastAsian: ""fontVariantLigatures: ""fontVariantNumeric: ""fontVariationSettings: ""fontWeight: ""gap: ""grid: ""gridArea: ""gridAutoColumns: ""gridAutoFlow: ""gridAutoRows: ""gridColumn: ""gridColumnEnd: ""gridColumnGap: ""gridColumnStart: ""gridGap: ""gridRow: ""gridRowEnd: ""gridRowGap: ""gridRowStart: ""gridTemplate: ""gridTemplateAreas: ""gridTemplateColumns: ""gridTemplateRows: ""height: ""hyphens: ""imageOrientation: ""imageRendering: ""inlineSize: ""isolation: ""justifyContent: ""justifyItems: ""justifySelf: ""left: ""length: 0letterSpacing: ""lightingColor: ""lineBreak: ""lineHeight: ""listStyle: ""listStyleImage: ""listStylePosition: ""listStyleType: ""margin: ""marginBlockEnd: ""marginBlockStart: ""marginBottom: ""marginInlineEnd: ""marginInlineStart: ""marginLeft: ""marginRight: ""marginTop: ""marker: ""markerEnd: ""markerMid: ""markerStart: ""mask: ""maskType: ""maxBlockSize: ""maxHeight: ""maxInlineSize: ""maxWidth: ""maxZoom: ""minBlockSize: ""minHeight: ""minInlineSize: ""minWidth: ""minZoom: ""mixBlendMode: ""objectFit: ""objectPosition: ""offset: ""offsetDistance: ""offsetPath: ""offsetRotate: ""opacity: ""order: ""orientation: ""orphans: ""outline: ""outlineColor: ""outlineOffset: ""outlineStyle: ""outlineWidth: ""overflow: ""overflowAnchor: ""overflowWrap: ""overflowX: ""overflowY: ""overscrollBehavior: ""overscrollBehaviorBlock: ""overscrollBehaviorInline: ""overscrollBehaviorX: ""overscrollBehaviorY: ""padding: ""paddingBlockEnd: ""paddingBlockStart: ""paddingBottom: ""paddingInlineEnd: ""paddingInlineStart: ""paddingLeft: ""paddingRight: ""paddingTop: ""pageBreakAfter: ""pageBreakBefore: ""pageBreakInside: ""paintOrder: ""parentRule: nullperspective: ""perspectiveOrigin: ""placeContent: ""placeItems: ""placeSelf: ""pointerEvents: ""position: ""quotes: ""r: ""resize: ""right: ""rowGap: ""rubyPosition: ""rx: ""ry: ""scrollBehavior: ""scrollMargin: ""scrollMarginBlock: ""scrollMarginBlockEnd: ""scrollMarginBlockStart: ""scrollMarginBottom: ""scrollMarginInline: ""scrollMarginInlineEnd: ""scrollMarginInlineStart: ""scrollMarginLeft: ""scrollMarginRight: ""scrollMarginTop: ""scrollPadding: ""scrollPaddingBlock: ""scrollPaddingBlockEnd: ""scrollPaddingBlockStart: ""scrollPaddingBottom: ""scrollPaddingInline: ""scrollPaddingInlineEnd: ""scrollPaddingInlineStart: ""scrollPaddingLeft: ""scrollPaddingRight: ""scrollPaddingTop: ""scrollSnapAlign: ""scrollSnapStop: ""scrollSnapType: ""shapeImageThreshold: ""shapeMargin: ""shapeOutside: ""shapeRendering: ""size: ""speak: ""src: ""stopColor: ""stopOpacity: ""stroke: ""strokeDasharray: ""strokeDashoffset: ""strokeLinecap: ""strokeLinejoin: ""strokeMiterlimit: ""strokeOpacity: ""strokeWidth: ""tabSize: ""tableLayout: ""textAlign: ""textAlignLast: ""textAnchor: ""textCombineUpright: ""textDecoration: ""textDecorationColor: ""textDecorationLine: ""textDecorationSkipInk: ""textDecorationStyle: ""textIndent: ""textOrientation: ""textOverflow: ""textRendering: ""textShadow: ""textSizeAdjust: ""textTransform: ""textUnderlinePosition: ""top: ""touchAction: ""transform: ""transformBox: ""transformOrigin: ""transformStyle: ""transition: ""transitionDelay: ""transitionDuration: ""transitionProperty: ""transitionTimingFunction: ""unicodeBidi: ""unicodeRange: ""userSelect: ""userZoom: ""vectorEffect: ""verticalAlign: ""visibility: ""webkitAlignContent: ""webkitAlignItems: ""webkitAlignSelf: ""webkitAnimation: ""webkitAnimationDelay: ""webkitAnimationDirection: ""webkitAnimationDuration: ""webkitAnimationFillMode: ""webkitAnimationIterationCount: ""webkitAnimationName: ""webkitAnimationPlayState: ""webkitAnimationTimingFunction: ""webkitAppRegion: ""webkitAppearance: ""webkitBackfaceVisibility: ""webkitBackgroundClip: ""webkitBackgroundOrigin: ""webkitBackgroundSize: ""webkitBorderAfter: ""webkitBorderAfterColor: ""webkitBorderAfterStyle: ""webkitBorderAfterWidth: ""webkitBorderBefore: ""webkitBorderBeforeColor: ""webkitBorderBeforeStyle: ""webkitBorderBeforeWidth: ""webkitBorderBottomLeftRadius: ""webkitBorderBottomRightRadius: ""webkitBorderEnd: ""webkitBorderEndColor: ""webkitBorderEndStyle: ""webkitBorderEndWidth: ""webkitBorderHorizontalSpacing: ""webkitBorderImage: ""webkitBorderRadius: ""webkitBorderStart: ""webkitBorderStartColor: ""webkitBorderStartStyle: ""webkitBorderStartWidth: ""webkitBorderTopLeftRadius: ""webkitBorderTopRightRadius: ""webkitBorderVerticalSpacing: ""webkitBoxAlign: ""webkitBoxDecorationBreak: ""webkitBoxDirection: ""webkitBoxFlex: ""webkitBoxOrdinalGroup: ""webkitBoxOrient: ""webkitBoxPack: ""webkitBoxReflect: ""webkitBoxShadow: ""webkitBoxSizing: ""webkitClipPath: ""webkitColumnBreakAfter: ""webkitColumnBreakBefore: ""webkitColumnBreakInside: ""webkitColumnCount: ""webkitColumnGap: ""webkitColumnRule: ""webkitColumnRuleColor: ""webkitColumnRuleStyle: ""webkitColumnRuleWidth: ""webkitColumnSpan: ""webkitColumnWidth: ""webkitColumns: ""webkitFilter: ""webkitFlex: ""webkitFlexBasis: ""webkitFlexDirection: ""webkitFlexFlow: ""webkitFlexGrow: ""webkitFlexShrink: ""webkitFlexWrap: ""webkitFontFeatureSettings: ""webkitFontSizeDelta: ""webkitFontSmoothing: ""webkitHighlight: ""webkitHyphenateCharacter: ""webkitJustifyContent: ""webkitLineBreak: ""webkitLineClamp: ""webkitLocale: ""webkitLogicalHeight: ""webkitLogicalWidth: ""webkitMarginAfter: ""webkitMarginBefore: ""webkitMarginEnd: ""webkitMarginStart: ""webkitMask: ""webkitMaskBoxImage: ""webkitMaskBoxImageOutset: ""webkitMaskBoxImageRepeat: ""webkitMaskBoxImageSlice: ""webkitMaskBoxImageSource: ""webkitMaskBoxImageWidth: ""webkitMaskClip: ""webkitMaskComposite: ""webkitMaskImage: ""webkitMaskOrigin: ""webkitMaskPosition: ""webkitMaskPositionX: ""webkitMaskPositionY: ""webkitMaskRepeat: ""webkitMaskRepeatX: ""webkitMaskRepeatY: ""webkitMaskSize: ""webkitMaxLogicalHeight: ""webkitMaxLogicalWidth: ""webkitMinLogicalHeight: ""webkitMinLogicalWidth: ""webkitOpacity: ""webkitOrder: ""webkitPaddingAfter: ""webkitPaddingBefore: ""webkitPaddingEnd: ""webkitPaddingStart: ""webkitPerspective: ""webkitPerspectiveOrigin: ""webkitPerspectiveOriginX: ""webkitPerspectiveOriginY: ""webkitPrintColorAdjust: ""webkitRtlOrdering: ""webkitRubyPosition: ""webkitShapeImageThreshold: ""webkitShapeMargin: ""webkitShapeOutside: ""webkitTapHighlightColor: ""webkitTextCombine: ""webkitTextDecorationsInEffect: ""webkitTextEmphasis: ""webkitTextEmphasisColor: ""webkitTextEmphasisPosition: ""webkitTextEmphasisStyle: ""webkitTextFillColor: ""webkitTextOrientation: ""webkitTextSecurity: ""webkitTextSizeAdjust: ""webkitTextStroke: ""webkitTextStrokeColor: ""webkitTextStrokeWidth: ""webkitTransform: ""webkitTransformOrigin: ""webkitTransformOriginX: ""webkitTransformOriginY: ""webkitTransformOriginZ: ""webkitTransformStyle: ""webkitTransition: ""webkitTransitionDelay: ""webkitTransitionDuration: ""webkitTransitionProperty: ""webkitTransitionTimingFunction: ""webkitUserDrag: ""webkitUserModify: ""webkitUserSelect: ""webkitWritingMode: ""whiteSpace: ""widows: ""width: ""willChange: ""wordBreak: ""wordSpacing: ""wordWrap: ""writingMode: ""x: ""y: ""zIndex: ""zoom: ""epubCaptionSide: <unreadable>epubTextCombine: <unreadable>epubTextEmphasis: <unreadable>epubTextEmphasisColor: <unreadable>epubTextEmphasisStyle: <unreadable>epubTextOrientation: <unreadable>epubTextTransform: <unreadable>epubWordBreak: <unreadable>epubWritingMode: <unreadable>__proto__: CSSStyleDeclaration

var heading = document.querySelector('#one');
//output - undefined

heading
//output - <h1 id=​"one" style=​"color:​ red;​ background-color:​ grey;​ font-size:​ 30px;​">​Heading-1​</h1>​

heading.innerText = "Heyy";
//output - "Heyy"

para = document.querySelector('.para');
//output - null


/*EVENT HANDLING */

//See the html page -adding 2 buttons

/*
  <script> Tag should used the at the end of the html document because the various obejcts deifned in the script
  might not be defined at the top see the code is executed from top to bottom.
 */ 