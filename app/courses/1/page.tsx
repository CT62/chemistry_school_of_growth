"use client"
import FileSystem from '@/components/FilePage.tsx';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function course1() {
  const files = [
    {
      FileName: 'Qs asked by students',
      FileType: 'folder',
      Files: [
        { FileName: 'Alcohol Q by student', FileType: 'video', ContentID: '1VsacaHuPl-SRxu4ydi8CqSCbLAIyZ6_4' },
      ],
    },
    {
      FileName: 'Notes',
      FileType: 'folder',
      Files: [
        {
          FileName: 'Functional Groups',
          FileType: 'folder',
          Files: [
            { FileName: '1. Functional groups', FileType: 'picture', ContentID: '1L5xveXUWJikf8Z6HpirDypLAY2RzBSxb' },
            { FileName: '2. Functional groups', FileType: 'picture', ContentID: '1dsYUa38JMbi1G0whPYyCl48ux49ZeuLp' },
          ],
        },
        {
          FileName: 'External Notes',
          FileType: 'folder',
          Files: [
            {
              FileName: 'Notes: Qs and Answers',
              FileType: 'folder',
              Files: [
                {
                  FileName: '1. Organic Families',
                  FileType: 'folder',
                  Files: [
			{ FileName: 'Families of organic compounds questions', FileType: 'picture', ContentID:'1JEYuOaSaFci5EmdscQYi9jcxlOIwgXG0'},

			{ FileName: 'Families of organic compounds answers', FileType: 'picture', ContentID:'1-ni5W-YTk6dloFfAHXPV-j9Weuvsp5IC'},
		  ],
                },
                {
                  FileName: '2. Organic Properties',
                  FileType: 'folder',
                  Files: [
		  	
			{ FileName: 'Organic properties summary', FileType: 'picture', ContentID:'1Uh9PAg3ck7aMrbmiatVlOZNIVw6eGN9a'},
			{ FileName: 'Organic properties summary empty', FileType: 'picture', ContentID:'1BDRrl5MaDzXM_m5ANvjuk_VpdwSrwrNv'},
		  ],
                },
              ],
            },
	    {
	    	FileName: 'Notes',
		FileType: 'folder',
		Files:[
			{ FileName: 'Organic chemistry', FileType: 'pdf', ContentID:'1skMK0GjyYeYeKoKSGkvjPRlo_vfjEstw'},

			{ FileName: 'Organic chemistry bonds', FileType: 'pdf', ContentID:'1hrmX7RB5q2klqwt1OqSIzK8usaiIAeSS'},
			{ FileName: 'Links to organic chemistry', FileType: 'pdf', ContentID:'1jp476b3MA0gAqXbBKPRLbuTq-ECWPTYB'},
		],
	    }
          ],

        },
	{
		FileName: 'Exam Qs & Slns',
		FileType: 'folder',
		Files: [
			{ FileName: '1. Alchohols (Lesson 1,2,3)', FileType: 'folder', Files: [
				{ FileName: 'Questions', FileType: 'pdf', ContentID: '1HwYQpH2-XtYsA6smkwvR_nvNuUj6rjIi'},

				{ FileName: 'Qs & Slns', FileType: 'pdf', ContentID: '1WKgm1Z0X2lW1Y40rtQCHsZS9hRjKgdlp'},
				{ FileName: 'Solutions', FileType: 'pdf', ContentID: '1VByZkZ0N2E0YRpYZuV8CM7FbfJoi9s2E'},
			],
			},
			{ FileName: '3. Functional Groups (Lesson 8,9)', FileType: 'folder', Files:[

				{ FileName: 'Aldehyde Qs', FileType: 'pdf', ContentID:'1-t0PJBmoYCp7TUt0yJwBJjvgu4tFXNKL'},
				{ FileName: 'Aldehyde Qs and Slns', FileType: 'pdf', ContentID:'1oiNPpS5vOWv0SCR3NZl8boOxD8TskvQ9'},
				{ FileName: 'Mixed functional groups Qs', FileType: 'pdf', ContentID: '1IUdfVD_HGXFjlcfqu-aWzkxeC7i-BpXM'},

				{ FileName: 'Mixed functional groups Qs and Slns', FileType: 'pdf', ContentID: '11Yjtydb2xz9ktSW8SCRKqOZ3ghV_b2T-'},
			],
			},

			{ FileName: '2. Functional Groups (Lesson 4,5,6,7)', FileType: 'folder', Files:[

				{ FileName: 'Functional group Qs', FileType: 'pdf', ContentID: '1cxhLVobGNTWhAh5B65dIwKSDGeAQKY3y'},

				{ FileName: 'Functions group Qs and Slns', FileType: 'pdf', ContentID: '1vjFuj9rYEXqScGIkBN943a2yApeHaVB1'},
			],
			},
			{ FileName: '4. Boiling Points (Lesson 10)', FileType: 'folder', Files:[

				{ FileName: 'Boiling points Qs', FileType: 'pdf', ContentID: '1Nor5SIQjktyxyUDN6NfrQx36pMEGFhBg'},

				{ FileName: 'Boiling points Qs & Slns', FileType: 'pdf', ContentID: '1UEfTbZ7NP2Rw64PErSF72Nv8MmC9TWaF'},
			],
			},



		],
	},
	{
		FileName: 'Basics essentials',
		FileType: 'folder',
		Files: [
			{ FileName:' Organic essentials', FileType: 'pdf', ContentID:'1X94XUJE7pVT9v_HLhq2x5ne07vKm7B8i'},			
		]
	},
	{
		FileName: 'Alkanes',
		FileType: 'pdf',
		ContentID: '1SkJmObXbTHEwMIq5E0L2pwxBuxFtE4Ox',
	},
      ],
    },
    {
    	FileName: 'Lessons',
	FileType: 'folder',
	Files:[
		{ FileName: 'Lesson 1', FileType:'folder', Files:[
			{ FileName: 'Lesson 1 Part A', FileType: 'video', ContentID: '1ldT40TlcJYja7M2EoFqwWcDMzdKhDViS',},
			{ FileName: 'Lesson 1 Part B', FileType: 'video', ContentID: '15NPx9mFywc8_CJIEej99sNRZaJwllQ0h',}
		]},
		{ FileName: 'Lesson 2', FileType:'folder', Files:[
			{ FileName: 'Lesson 2 Part A', FileType: 'video', ContentID: '1hGbXUHmb_5RKzwCuwH90z4W1UCs6QEo1',},
			{ FileName: 'Lesson 2 Part B', FileType: 'video', ContentID: '1WJg-2tEK-XNtyWUoVmVad20mG66zAIkI',}
		]},
		{ FileName: 'Lesson 3', FileType:'folder', Files:[
			{ FileName: 'Lesson 3 Part A', FileType: 'video', ContentID: '1byavSczWULCiqK2oHkbl_ZimcB29p7oY',},
			{ FileName: 'Lesson 3 Part B', FileType: 'video', ContentID: '1gvO6nDamhVdKaVP7CIxwS89W1jNhw-be',}
		]},
		{ FileName: 'Lesson 4', FileType:'folder', Files:[
			{ FileName: 'Lesson 4 Part A', FileType: 'video', ContentID: '1khWI9cwgJttRAv4zklj5BbK7YP9XKnUe',},
			{ FileName: 'Lesson 4 Part B', FileType: 'video', ContentID: '1wqMZ9du31STu4hoCOl-dZoIwEEPtPBif',},
			{ FileName: 'Lesson 4: Mistake', FileType: 'folder',Files:[
				{ FileName: 'Exam Q mistake part I', FileType: 'video', ContentID:'1RyiQIkcWFnFPWHBjupZvmA8II9k3KsKm',},
				{ FileName: 'Exam Q Solution part II', FileType: 'video', ContentID:'1GN0DM8CHh3iHAU8XB--B4eHo4s3shTnW',},
				{ FileName: 'Balancing Eqn Mistake', FileType: 'video', ContentID:'11m8kduucpRUC59ET1wpz45s72YCV5mwG',},
			]},
		]},
		{ FileName: 'Lesson 5', FileType:'folder', Files:[
			{ FileName: 'Lesson 5 Part A', FileType: 'video', ContentID: '1VtatzhG0UZSlzXMXkFpJSnub8tXDnWLb',},
			{ FileName: 'Lesson 5 Part B', FileType: 'video', ContentID: '1cE5XlaYNJ7KCiWrrVevA8w1wzuh5UNHb',}
		]},
		{ FileName: 'Lesson 6', FileType:'folder', Files:[
			{ FileName: 'Lesson 6 Part A', FileType: 'video', ContentID: '1vJbV8DuKboHYram_Y58eb8wh4jZrzLgM',},
			{ FileName: 'Lesson 6 Part B', FileType: 'video', ContentID: '1ea6BdRpR42KxyJGxlQIgFoxVQ4e1HTsM',}
		]},
		{ FileName: 'Lesson 7', FileType:'folder', Files:[
			{ FileName: 'Lesson 7 Part A', FileType: 'video', ContentID: '1FsaWRKLKtRc8l3wyFCQ1T2MKQ3Ehze24',},
			{ FileName: 'Lesson 7 Part B', FileType: 'video', ContentID: '1tjnqyXGr5yJrqivBCU2_CSb4ICWHbuL4',}
		]},
		{ FileName: 'Lesson 8', FileType:'folder', Files:[
			{ FileName: 'Lesson 8 Part A', FileType: 'video', ContentID: '1jZY3rWjxoK3B60H7Xsp2UekWmg0UGeEY',},
			{ FileName: 'Lesson 8 Part B', FileType: 'video', ContentID: '10V7F_KMOwT-Zlxh8fL_6MOZH1zbyw8gI',},
			{ FileName: 'Lesson 8 Part B continuation', FileType: 'video', ContentID: '18b9py6gITqykYuroqabe3PuXCX1q4a6H',}
		]},

		{ FileName: 'Lesson 9', FileType:'folder', Files:[
			{ FileName: 'Lesson 9 Part A', FileType: 'video', ContentID: '18r-hh7ppKKqqDInSD7c1O4blHuboPgri',},
			{ FileName: 'Lesson 9 Part B', FileType: 'video', ContentID: '1T17B6IhV5a_9EIYAu_3DLhxDbhegwV85',}
		]},

		{ FileName: 'Lesson 10', FileType:'folder', Files:[
			{ FileName: 'Lesson 10 Part A', FileType: 'video', ContentID: '11jPFgy8nDXQlTFgyj9MpWilLoPczUtFI',},
			{ FileName: 'Lesson 10 Part B', FileType: 'video', ContentID: '1v_TqDpktOOQ-_VgCd4wLFZpO18D5UuSz',},
			{ FileName: 'Lesson 10 Part B continuation', FileType: 'video', ContentID: '10Mt4FM6r8EgLn2PsxdRBeQxXI1ofrA7_',},
			{ FileName: 'Lesson 10 Part C', FileType: 'video', ContentID: '1O45OVj4ZjlemiV2Y8haDIGyoZ2Zj041j',}
		]},

	],
    }
  ];
    const { data: session, status } = useSession();

    if (!session) {
    	redirect('/signin')
    }

  return (
    <div className="py-10">
      <FileSystem title="Organic Chemistry II" files={files} />
    </div>
  );
}
