import isMobile from './isMobile';
const calcRem = (designWidth = 1920) => {
	const screenWidth = document.body.clientWidth || 0;
	if (isMobile()) {
		document.documentElement.style.fontSize =
			(screenWidth / designWidth) * 100 + "px";

	} else {
		document.documentElement.style.fontSize =
			(screenWidth / designWidth) * 100 + "px";
	}

}
const resizeWindow = (designWidth = 1920) => {
	window.onresize = (designWidth) => {
		calcRem()
	}
}
export {
	calcRem,
	resizeWindow,
};