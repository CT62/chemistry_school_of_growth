"use client"
import FileSystem from '@/components/FilePage.tsx'


export default function course0(){
	const files = [
    		{
        	FileName: 'Lesson 1',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Lesson 1 Part A', FileType: 'video',ContentID:'1f0s4aDlEhN9i5kxPyf1RZxt6C7wMCxOj'},
       	     		{ FileName: 'Lesson 1 Part B', FileType: 'video',ContentID:'1KwfW5kb3GOVXAsE3YsP6DEyKcyK22F51'},
       	     		{ FileName: 'Lesson 1 Part C', FileType: 'video',ContentID:'1X-gbwUPUKGltUyBQwn0FN-blWw3wnbQ1'},
       		],
    		},
		{
        	FileName: 'Lesson 2',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Lesson 2 Part A', FileType: 'video',ContentID:'1pcr1POMBdvnvWYhMgf5S-JCWJraQLg4D'},
       	     		{ FileName: 'Lesson 2 Part B', FileType: 'video',ContentID:'1wovkEj3ji112hnkFQ2Sj49djS2xe7599'},
       	     		{ FileName: 'Lesson 2 Part C', FileType: 'video',ContentID:'1PkJ3xLBoO0vuL8puV_YfEJvS6CP4Tt70'},
       		],
    		},
		{
        	FileName: 'Lesson 3',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Lesson 3 Part A', FileType: 'video',ContentID:'18_c_S-QHwMd9tNoRk6w78p4be6TQ0SsO'},
       	     		{ FileName: 'Lesson 3 Part B', FileType: 'video',ContentID:'1oC0vY2phV_7Z6HlM34-5SRwLWIAL9iGP'},
       	     		{ FileName: 'Lesson 3 Part C', FileType: 'video',ContentID:'1z1ChHvWkPjKiKF5YX3I8MSPX1BNnCwdS'},
       		],
    		},
		{
        	FileName: 'Lesson 4',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Lesson 4 Part A', FileType: 'video',ContentID:'1V3WC9lu3Ca357ORStTmw4EzCoQ97gSjp'},
       	     		{ FileName: 'Lesson 4 Part B', FileType: 'video',ContentID:'19FDR-E59KRFmcmZt7RVSm92vNo0zBaqs'},
       	     		{ FileName: 'Lesson 4 Part C', FileType: 'video',ContentID:'1RSqLyQBQArYSDVk0DqnfOTNQI3jsK6ej'},
       		],
    		},
		{
        	FileName: 'Lesson 5',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Lesson 5 Part A', FileType: 'video',ContentID:'145-kwY6Yo9MI_gslvw75a7asdmi6goqM'},
       	     		{ FileName: 'Lesson 5 Part B', FileType: 'video',ContentID:'1P8nDmA5Kz-OWhJLcWoivcSESiawaPwlY'},
       	     		{ FileName: 'Lesson 5 Part C', FileType: 'video',ContentID:'1ysR_DWCFIgzdnR0rZFMPFBYYZ_mNvCnW'},
       		],
    		},
		{
        	FileName: 'Lesson 6',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Lesson 6 Part A', FileType: 'video',ContentID:'1riOTd5_pShPOK7u_GqrRc_hvK37J-U6g'},
       	     		{ FileName: 'Lesson 6 Part B', FileType: 'video',ContentID:'1fB4ZMrNWVAV8_EKeatqu_YpsJ6Tk4q_8'},
       	     		{ FileName: 'Lesson 6 Part C', FileType: 'video',ContentID:'1FloGGSgxL_AMzCm7kwBC2M7vQenOrZuo'},
       		],
    		},
		{
        	FileName: 'Questions from Students',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Rounding numbers', FileType: 'video',ContentID:'1W2ojz2y78BMMriOHA0h2FG0AwlGasHtv'},
       	     		{ FileName: 'Aldehyde functional group', FileType: 'video',ContentID:'19ugLgl9piIW9LSSAdM-t_CCMgh1X1LAE'},
       	     		{ FileName: 'Functional groups aldehyde vs ketone', FileType: 'video',ContentID:'14CzhvA7iShBL9cVwwtc6jDRFw-THRCYo'},
       		],
    		},
		{
        	FileName: 'Introduction & Tips',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Organic Chemistry I', FileType: 'video',ContentID:'1O4CY470R2qrLF9sGHi11ts-798AMI3Ij'},
       		],
    		},
		{
        	FileName: 'Extra Info/Notes',
        	FileType: 'folder',
      	  	Files: [
       	     		{ FileName: 'Alkanes', FileType: 'pdf',ContentID:'16SLN7f1KC6gBbiFhFhqzW0iyTXd2FZf2'},
       	     		{ FileName: 'Exam Qs lns', FileType: 'pdf',ContentID:'1Jzdzwc9FS-nS5-FQIqf0Hat1iifiHCaq'},
			{ FileName: 'Periodic Table', FileType: 'document', ContentID: '1V3BZd3Zl6vDJ50HCXXXJfzIrUl73j0S3'},
			{ FileName: 'Aliphatics vs amomatics', FileType: 'picture', ContentID: '1eiSuCfhSiP-BDUuhxMuuWNND5w1ZKfJg'},
			{ FileName: 'Formulas', FileType: 'pdf', ContentID:'1ASFy_3gbn8N8JwB4m2uN32m61U9Ihqbm'},
			{ FileName: 'Single vs double bonds', FileType: 'pdf', ContentID:'171SLmwJRTu8EOu7IPo1UZFPgc0H67hUO'},
			{
        	FileName: 'functional groups',
        	FileType: 'folder',
      	  	Files: [
			{ FileName: 'the main players', FileType: 'picture', ContentID: '1gcn9jniv565xznkqrxc3kh-zusm8sri-'},
			{ FileName: 'functional groups', FileType: 'picture', ContentID:'18gsi3dyqiqdqahif_mcyar-w8efblyum'},
			{ FileName: 'types of groups', FileType: 'picture', ContentID:'1wqpwqwwmtxuip-yqawv51ocubz_qtqpm'},

       		],
    		},
		]
		},
		{
        	FileName: 'Exam Questions and Solutions',
        	FileType: 'folder',
      	  	Files: [

       	     		{ FileName: 'Exam Questions Only', FileType: 'document',ContentID:'18ZGA16N5oU0j2O41IWwnur6kwnrbkz2e'},
{
        	FileName: 'Exam Qs & Slns',
        	FileType: 'folder',
      	  	Files: [
			{ FileName: 'Qs & Slns', FileType: 'picture', ContentID:'1j9JsnjDfsu2xG26-CbOoXN3rBTiMVW7X'},
			{ FileName: 'Qs & Slns covered in the course', FileType: 'picture', ContentID:'1K_y0zb0VXnM7WR3ykIM83YgJXWlbsl2M'},

       		],
    		},


       		],
    		},

	];

	return(
	<div className="py-10">
		<FileSystem
		title="Organic Chemistry I"
		files={files}
		
		/>

	</div>
	);
}

