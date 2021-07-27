const calcRem = (designWidth:number) => {
	const screenWidth = document.body.clientWidth || 0;
	document.documentElement.style.fontSize =
		(screenWidth / designWidth ) * 100 + "px";
}

const resizeWindow = (designWidth:number) => {
	window.onresize = () => {
		calcRem(designWidth)
	}
}
export {
	calcRem,
	resizeWindow,
};