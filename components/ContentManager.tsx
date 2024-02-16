interface Props{
	ContentID: string
}

export default function VideoManager({ContentID}:Props){
	return(
		<div className="flex justify-center py-20">
		<iframe src={`https://drive.google.com/file/d/${ContentID}/preview`} width="1220" height="680" allow="autoplay"></iframe>
		</div>
	);
}
