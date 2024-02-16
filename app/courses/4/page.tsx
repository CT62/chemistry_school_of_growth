"use client"
import FileSystem from '@/components/FilePage';

export default function course4(){
	const files = [
	{
        FileName: 'Recordings',
        FileType: 'folder',
        Files:[
	{ FileName: '1. fuels & thermochemistry', FileType: 'video', ContentID:'1JufpCAOAO8SyT3XGZh_JXekxK9Mpy3OT'},
	{ FileName: '2. fuels & thermochemistry', FileType: 'video', ContentID:'1ma9RIcGXJH9yBirOOkz1PtryHSOmNQrL'},
	{ FileName: '3. fuels & thermochemistry', FileType: 'video', ContentID:'1aK8McRBVAXFgQNWZ59-3V6HP8MpGF6cl'},
	{ FileName: '4. fuels & thermochemistry', FileType: 'video', ContentID:'1g-rN1UU4hKHNX6vKfAUq6kl7nz2O9DFd'},
	{ FileName: '5. fuels & thermochemistry', FileType: 'video', ContentID:'17gWKJz_FM0ZxGzphTByrubuK50tn45IH'},
	{ FileName: '6. fuels & thermochemistry', FileType: 'video', ContentID:'1FD0F8hLc1prw_wdQtTv6xda7-oXG4EAx'},
	{ FileName: '7. fuels & thermochemistry', FileType: 'video', ContentID:'1DwXNjmxi7j6Fkp0vrtK1ciNFK3GTF2y3'},
	{ FileName: '8. fuels & thermochemistry', FileType: 'video', ContentID:'1OgsFpy_SeIXnZwMHL994I2Ts5hfdcnlL'},
	{ FileName: '9. A fuels & thermochemistry', FileType: 'video', ContentID:'1czGNX75tgRpW7TSdITaD85Veb1fSkRlP'},
	{ FileName: '9. B fuels & thermochemistry', FileType: 'video', ContentID:'1AjGub8urMvZsvkPvr5jTXuU5gOJumXP2'},
	{ FileName: '10. fuels & thermochemistry', FileType: 'video', ContentID:'1M8-3BS7LZxN-w3sgBg6y9CSA9B3VgjC-'},
	{ FileName: '11. fuels & thermochemistry', FileType: 'video', ContentID:'1xjtUEvEn-zzT7SRV5rQ8-foBZYZZ3CRw'},
	{ FileName: '12. fuels & thermochemistry', FileType: 'video', ContentID:'19vFGaxV6S4v58MRR9jUkBQCaK2UHJPhR'},

	    ],
	},
	{ FileName: 'Notes', FileType: 'folder', Files:[
		{ FileName: 'Leaded Petrol, Unleaded Petrol & Diesel', FileType:'picture',ContentID:'1Rg7TiU93xNq6PjjqDmIuPIHo-2GC9oZa'},
		{ FileName: '1. Fuels and thermochemistry notes', FileType:'pdf',ContentID:'1Q2Ne-3a75pMEAgBLHTLUICunGiiy0UJ2'},
		{ FileName: '2. Fuels and thermochemistry notes', FileType:'pdf',ContentID:'1Fm0wqaitBqAK83KBBWqymg0D7rh9J3JO'},
		{ FileName: '3. Fuels and thermochemistry notes', FileType:'pdf',ContentID:'1y9gawpnun7NV6KWdrYCgrUNop1cHFNyS'},

	]},
	{ FileName: 'Covalent bonds & PT', FileType: 'folder', Files:[
		{ FileName: 'Periodic table elements', FileType:'picture',ContentID:'1ZcKaDmrgbyjMZazQ_uSMeXOleQXxPIuL'},
		{ FileName: 'Covalent bond examples', FileType:'picture',ContentID:'1-0bGwJUQdL6cForwkztkeIMbJZatKGrG'},

	]},

	{ FileName: 'All Exam Qs and Slns', FileType: 'folder', Files:[
			{ FileName: 'Exam Qs and Slns', FileType: 'pdf', ContentID:'1P9lTb4Ojv7fCLC0IBGeWmS6X1qmMB4LS'},
	]}

	];

	return(
		<div className="py-10">
			<FileSystem title="6th year course on fuels and thermochemistry" files={files} />
		</div>
	);
}
