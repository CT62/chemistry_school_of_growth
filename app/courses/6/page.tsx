"use client"
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import FileSystem from '@/components/FilePage';

export default function course6(){
	const files = [
	{ FileName: 'Lessons', FileType: 'folder', Files:[
		{ FileName: 'Day 1', FileType:'folder', Files:[
			{ FileName: 'Lesson 1', FileType: 'video', ContentID:'1nZaBFwJxUpjRCMS0uu9l-ZdvPNNyJQdh',},
			{ FileName: 'Lesson 2', FileType: 'video', ContentID:'1VFzrFc-WXw9MwUgsNrsqys4gDMPkFh1_',},
			{ FileName: 'Lesson 3', FileType: 'video', ContentID:'1m-v3gZtWElk2tmFr41xbnewI9ZKF_bK7',},

		]},
		{ FileName: 'Day 2', FileType:'folder', Files:[
			{ FileName: 'Lesson 1', FileType: 'video', ContentID:'1RUhpCqh0PNCQsE9MDLmcckv0BsRKK2Ki',},
			{ FileName: 'Lesson 2', FileType: 'video', ContentID:'1dDfyYRoxSJgDWwfK1JAX_M3LbWbFFxoJ',},
			{ FileName: 'Lesson 3', FileType: 'video', ContentID:'1-nGd3ok1FX7kgdimjOBbyijcz_lsqfNu',},
			{ FileName: 'Lesson 4', FileType: 'video', ContentID:'1dXniaitLssJixpv9jWX5RehwAtOJ9TFr',},

		]},
	]},
	{ FileName: 'Ultimate Guide', FileType: 'folder', Files:[
		{ FileName: 'Without Qs', FileType: 'folder', Files:[
			{ FileName: 'Exam tips CSG', FileType: 'pdf', ContentID:'1DFaJRguOG2eJWi7q0fWL6xCB-FTb6NdRGbayUy0CNCk'},
		]},
		{ FileName: 'With Qs', FileType: 'folder', Files:[
			{ FileName: 'Exam Tips CSG Qs', FileType: 'pdf', ContentID:'1ooszIkeBV_OnbfqwLft9lsHOwyMh34GK'},
		]},
		{ FileName: 'Q1 tracker', FileType: 'folder', Files:[
			{ FileName: 'Q1 tracker', FileType: 'folder', ContentID:'1Qx6H3mT3fcbjMSdMcGvA4ZWHpI6iwU-K'},
		]},
		{ FileName: 'IUPAC essentials', FileType: 'folder', Files:[
			{ FileName: 'Image', FileType: 'pdf', ContentID:'1pORjVktJSm1huJjn6fAwP64FIlhE_c2H'},
			{ FileName: 'IUPAC organic essentials', FileType: 'pdf', ContentID:'1Z_4H2LoFsh0JlY-EzrtxBcEdP9TE3rAW'},
			{ FileName: 'Organic chemistry Qs', FileType: 'pdf', ContentID:'1zrnoX23zttyVZ6NMmeeNTVfFxWyONCSG'},
			{ FileName: 'Organic chemistry Slns', FileType: 'pdf', ContentID:'1A0OAYObsHcebg5x3fAiNTNeDQz0u0nXT'},
		]},

	]},
	{ FileName: 'Exam paper', FileType: 'folder', Files:[
		{ FileName: 'Exam paper A', FileType: 'pdf', ContentID:'115SQ3Eht08jLphuC1h-er_vi1dnzMl0D'},
		{ FileName: 'Exam paper B', FileType: 'pdf', ContentID:'1vCHRONwDhLuXleHlKJoNyCVAw_aLZJ-c'},
	]},
	{ FileName: 'Answer all Qs?', FileType: 'folder', Files:[
		{ FileName: 'Should I answer all Qs?', FileType: 'pdf', ContentID:'18yyqBGaM5CXETiiDUMG75cdPuwcC6bBa'},
	]},
	{ FileName: 'Changes to exam', FileType: 'folder', Files: [
		{ FileName: 'Changes to exam 2024', FileType: 'picture', ContentID:'1skC0fJflTiRpZa4yxg5PCBjtjNzJYD57'},
	]},
	];
	const { data: session, status } = useSession();

    	if (!session) {
		redirect('/login');
    	}
	return(
		<div className="py-10">
			<FileSystem title="Ultimate H1 Guide" files={files}/>
		</div>
	)
}
