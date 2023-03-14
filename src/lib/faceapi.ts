


// export const models = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights'
export const models = '/models'
export const size = 416 // 128, 416, 512, 608
export const delay = 100
export const useGeo = false

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function getCamera(width = size, height = size) {
	let stream: MediaStream | null = null
	return {
		stream: null,
		start : async () => {
			stream = await navigator.mediaDevices.getUserMedia({ video: { width, height } });
			return stream
		},
		stop: () => { stream?.getTracks()[0].stop() }
	}
}