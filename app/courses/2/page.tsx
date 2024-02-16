"use client"
import FileSystem from '@/components/FilePage.tsx';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function course2(){
	const files = [
    {
        FileName: 'Recordings',
        FileType: 'folder',
        Files:[
            { 
                FileName: 'Lesson 1', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Audio Part A', 
                                FileType: 'folder', 
                                Files:[
                                    { FileName: 'Playback', FileType: 'video', ContentID:'1__JffFkZ6ivaWye_omJiABF0ZjRrmKrx'},
                                    { FileName: 'Audio only Introduction', FileType:'video',ContentID: '1WTYtbjt5fcsFZwkDyLArsO6LLhbIyakq'},
                                    { FileName: 'Audio only Part A', FileType:'video',ContentID: '1Iubog4FfCOdAo1Lbnrlw3ztOW-DTW60c'},
                                ]
                            },
                            { FileName: 'Lesson 1 part A', FileType: 'video', ContentID: '1E0fPFyz_Re3uLIVwXuoJyQuzwUDp8DzW'},
                            { FileName: 'Introduction part A', FileType: 'video', ContentID: '18GxD9mhwEHwgq-fR29XY6Vj7HKMdGIo0'}
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Audio Part B', 
                                FileType:'folder',
                                Files:[
                                    { FileName: 'Playback', FileType: 'video', ContentID:'1y0DE9savgA9srbyzKZ2IqFXxZ8mFddy4'},
                                    { FileName: 'Audio only Part B', FileType:'video',ContentID: '1xa-QnPnV_vpCVHeYxGPFnWS6K04KFoU0'}
                                ]
                            },
                            { 
                                FileName: 'lesson 1 part B', 
                                FileType: 'video', 
                                ContentID: '1kDHXQLfWdsCMYQWExc30ei1zDBgBwO-A'
                            }
                        ]
                    },
                    { 
                        FileName: 'Qs from students', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Atom Lesson 1 Q from student', 
                                FileType: 'video', 
                                ContentID: '1-rtE2wEuC4P4T-fNTv4povVzEGFidVVe'
                            }
                        ]
                    }
                ]
            },
	    { 
                FileName: 'Lesson 2', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Audio Part A', 
                                FileType: 'folder', 
                                Files:[
                                    { FileName: 'Playback', FileType: 'video', ContentID:'1fDAB1CkMsgMD4Xc2RKhxscoW78WM9BuA'},
                                    { FileName: 'Audio only Introduction', FileType:'video',ContentID: '12UNZNN8L13RhY4pE6LRzlWUt7WUzPs1u'},
                                    { FileName: 'Audio only Part A', FileType:'video',ContentID: '1o3Xng5Ffk_3jCjfwoNvwnmjrPuKA6OZI'},
                                ],
                            },
                            { FileName: 'Introduction part A', FileType: 'video', ContentID: '1kSnadI-8S656htytS0UikE7k4GYBhlU1'},
                            { FileName: '1. Atomic Structure', FileType: 'video', ContentID: '18g6ZMlxnSxc34C3HAdBuqTZ3Aj6AErzl'},
			    { FileName: '2. Lesson 2 part A', FileType: 'video', ContentID: '13iGzfpaKQTQupEegly7-94nVgp2j9DlY'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Audio Part B', 
                                FileType:'folder',
                                Files:[
                                    { FileName: 'Playback', FileType: 'video', ContentID:'17lAnZRhbs381CoN2DlME44amSax__2o1'},
                                    { FileName: 'Audio only Part B', FileType:'video',ContentID: '1xa-QnPnV_vpCVHeYxGPFnWS6K04KFoU0'}
                                ]
                            },
                            { 
                                FileName: 'Atomic Stucture Part B', 
                                FileType: 'video', 
                                ContentID: '1_lpNl6irUEzkPrpvX-2KaGb71o_aMKB3'
                            }
                        ]
                    },
                ]
            },
	    {
                FileName: 'Lesson 3', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 3 Part A', FileType: 'video', ContentID: '14AfM9YdGszpqIAEKMaJmDItdfNZ8JxMt'},
			    {
                                FileName: 'Part A correction', 
                                FileType: 'video', 
                                ContentID: '1cM5lEUmZ3GfEbs64x2zGYCFG5b14i9oC'
                            }

			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 3 Part B', 
                                FileType: 'video', 
                                ContentID: '1m9kLXF2iHInBrhcylya72AjjOB8OVpBX'
                            },
			]
                    },
                ]
            },
	    { 
                FileName: 'Lesson 4', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 4 Part A', FileType: 'video', ContentID: '1upGfx--nJBERXy91y3zWal_GHIk0-8lh'},
			    {
                                FileName: 'Audio Part A', 
                                FileType: 'folder', 
				Files:[
					{ FileName: 'Playback', FileType: 'video', ContentID: '198JHYWz1LuVQbRyXBvOSLpuqJkKLYqpU'},
					{ FileName: 'Audio only Part A', FileType: 'video', Content: '1uH0BOuEJWNjPdDJrXscFv1-mQrgidSdD'},
				],
                            }

			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 4 Part B', 
                                FileType: 'video', 
                                ContentID: '1NzWniKkeFaUNLSGrhATS_AHgS422FpBX'
                            },
			    {
			    	FileName: 'Audio Part B',
				FileType: 'folder',
				Files: [
					{ FileName: 'Playback', FileType: 'video', ContentID: '1nlPy9toDQhKxfKgWsuOBf37gKFw3e8oP',},
					{ FileName: 'Audio only Part B', FileType: 'video', ContentID: '1LA1fkYSUVHP6_Ar9EzAsD9SABm1d7QxA',}
				],
			    },
			]
                    },
		    { 
                        FileName: 'Qs from students', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Atom Lesson 1 Q from student', 
                                FileType: 'video', 
                                ContentID: '1jj9AM60T6MjbvkTH7ioytIk6TOkBVWiD'
                            },
			]
                    },

                ]
            },
	{ 
                FileName: 'Lesson 5', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 5 Part A', FileType: 'video', ContentID: '1eKhVmFEpM7t1Y1wbC5_732PU35Jle7tz'},
			    {
                                FileName: 'Audio Part A', 
                                FileType: 'folder', 
				Files:[
					{ FileName: 'Playback', FileType: 'video', ContentID: '1jbdDu35yQbnV1RpcetgmAWVqJHKQUlj6'},
					{ FileName: 'Audio only Part A', FileType: 'video', Content: '1z41LirGBk4W1WG331YwN3srJVxgMLEy-'},
				],
                            }

			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 5 Part B', 
                                FileType: 'video', 
                                ContentID: '1Sr7Kg6ssxPChdGxxlU2ijGmCmy1C6TJy'
                            },
			    {
			    	FileName: 'Audio Part B',
				FileType: 'folder',
				Files: [
					{ FileName: 'Playback', FileType: 'video', ContentID: '1YSuWVsFsDOQlZ8ggE-MGKpIDu5WNNW3S',},
					{ FileName: 'Audio only Part B', FileType: 'video', ContentID: '1Qiiuq3rMsDyCpYfstwdAB7XJIn9AP6CT',}
				],
			    },
			]
                    },

                ]
            },
	    { 
                FileName: 'Lesson 6', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 6 Part A', FileType: 'video', ContentID: '1XmQosGjLRNxcOye7zt23jQIQvzMdPSuZ'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 6 Part B', 
                                FileType: 'video', 
                                ContentID: '10Uhf4iNPk-2SJNJvneXTM04ajLrCs2cv'
                            },
			]
                    },

                ]
            },
	    { 
                FileName: 'Lesson 7', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 7 Part A', FileType: 'video', ContentID: '1T0lKrgnel38Itb5YHLXRmIkti1ro4m1f'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 7 Part B', 
                                FileType: 'video', 
                                ContentID: '1oCjYuErdqVphXlWg7EFo3I_wqm05N-iR'
                            },
			]
                    },

                ]
            },
	    { 
                FileName: 'Lesson 8', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 8 Part A', FileType: 'video', ContentID: '18_cdHE0PnnlFhY2lcCyRzLQbXocctGT0'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 8 Part B', 
                                FileType: 'video', 
                                ContentID: '1I6eVgL6EF_y-hdcru6TD-yo8bGp2O09o'
                            },
			]
                    },

                ]
            },
	    { 
                FileName: 'Lesson 9', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 9 Part A', FileType: 'video', ContentID: '1VUIs9yG7xthxXWQW6Pdf9gMbNa8XupMM'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 9 Part B', 
                                FileType: 'video', 
                                ContentID: '1CsPyLhNS_H18i6t3w_b823M11gnm_1eA'
                            },
			]
                    },

                ]
            },
	    { 
                FileName: 'Lesson 10', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 10 Part A', FileType: 'video', ContentID: '1AXm9ggqaS0wxHACB4iq-TvwLMGVc4YtM'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 10 Part B', FileType: 'video', ContentID: '1PawN600HUXjYPPaUV0quB8MU0RST8dlY'},
			   ]},

                    { 
                        FileName: 'Part C',
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 10 Part C', 
                                FileType: 'video', 
                                ContentID: '1YZI3HpPMoBEwe9lYq-OnBpMCAz_uJa_6'
                            },
			]
                    },

                ]
            },

        ]
    	},
	{ FileName: 'Notes', FileType: 'folder', Files: [
		{ FileName:'External Notes', FileType: 'folder', Files: [
			{ FileName: '1. Atomic structure HL', FileType: 'pdf', ContentID: '1WdRxSkhXsjFlWRB3bzgbIWvbZCztAmeC',},
			{ FileName: '2. Arrangement of electrons in the atom HL', FileType: 'pdf', ContentID: '1LJrS50KeoHjRzYueNqtU10JRUtNrCOYf',},
			{ FileName: '3. Atomic structure HL', FileType: 'pdf', ContentID: '1qVcDcrLazbSNg2ry3JIw8IzPIMha8Tr6',},
			{ FileName: '4. Chemical bonding, Chemical formulas HL', FileType: 'pdf', ContentID: '1Qx-zjOTo-0ABgCEW75FQshtKeIc-2w3O',},
			{ FileName: '5. Trends in the periodic table HL', FileType: 'pdf', ContentID: '1v1APq1m9hp8VOZiLlFNzQ4FaIc3xnQLF',},
			{ FileName: '6. chemical equilibrium HL', FileType: 'pdf', ContentID: '1L6B1mW5F9vPmB5kdGpeFTKWvEG0BfNpe',},
		]},
		{ FileName:'Course 1 (10 week course, Sept-Dec)', FileType: 'folder', Files: [
			{ FileName: 'Lesson 1 (Exam layout timing structure)', FileType: 'folder', Files: [
				{ FileName: 'Exam layout and timing', FileType: 'pdf', ContentID: '1uGtmfe_6522SALHHlN1fOAXSGzGmCzGS'},
		]},
		{ FileName: 'Lesson 2,3,4 (The Atom)', FileType: 'folder', Files: [
			{ FileName: 'The Atom', FileType: 'pdf', ContentID: '1M1gKXQdgAnlXkcYNX-T5TPk2f0h2IUEk'},
			{ FileName: 'The Atom additional info', FileType: 'pdf', ContentID: '1ViqLHJcR9UvBb8q5sGOA2THxIhiNHSTG'},
			{ filename: 'Period table elements', filetype: 'picture', contentid: '1MxY6bwXJBcmGm8Dxx5t6YGDBS8V8z_SW'},
			{ filename: 'Period table notes', filetype: 'picture', contentid: '1ZMYMk-ebX6sgxaeUs1eO8TP3iZkZfJxy'},
			{ filename: 'Atomic structure', filetype: 'picture', contentid: '1oR1UVgLK-B4N-f-ynHeVRJdPWacJhuiT'},
			{ filename: 'Atomic structure notes', filetype: 'picture', contentid: '1Vkv3iILYDBXN4URl2Y5bHb5VWLXLecTB'},
		]},
		{ FileName: 'Lesson 5,6,7 (Electronic structure arrangement)', FileType: 'folder', Files:[
			{ FileName: 'Lesson 5', FileType: 'folder', Files: [
				{ FileName: 'Period table', FileType: 'pdf', ContentID: '1otkdZJXGHRA-YNvh8OuzJmxVBiTJGnyG',},
				{ FileName: 'Notes lesson 5', FileType: 'pdf', ContentID: '1u9CroW0aas4336Zd6ug20KXiJj7FpjKZ',},
				{ FileName: 'Lesson 5 electronic configuration', FileType: 'pdf', ContentID: '1m7TDGLv0dnbRZc7cBabju-as9-3LbZhF',},

			]},
			{ FileName: 'Lesson 6', FileType: 'folder', Files: [
				{ FileName: 'Lesson 6 notes', FileType: 'pdf', ContentID: '1VWq1htCrZS59oCzG6OPAX0f0MzIy6lFW',},
			]},
			{ FileName: 'Lesson 7', FileType: 'folder', Files: [
				{ FileName: 'Lesson 7', FileType: 'folder', Files:[
					{ FileName: 'Lesson 7 A', FileType: 'pdf', ContentID: '1uXwisyjhzCy_w2ocaAZ-6fDbGX-CjGY5'},
					{ FileName: 'Lesson 7 B', FileType: 'pdf', ContentID: '1BMeRXyC2-W6_48zWTacNA-d9ccinv5bl'},
				]}
			]},
		]},
		{ FileName: 'Lesson 8 (Ionic & covalent bonds)', FileType: 'folder', Files:[
			{ FileName: 'Ionic & covalent bonding', FileType: 'pdf', ContentID: '1CvVif200dHSEnhHPE-E6n7KnxQIGjljf'},
			{ FileName: 'Covalent bonds B', FileType: 'pdf', ContentID: '1VPhR3Vc5MDQBO81NF_CMKyqwag0GnWC0'},
		]},
		{ FileName: 'Lesson 9,10 stoichiometry', FileType: 'folder', Files: [
			{ FileName: 'Tips for this chapter & organic chemistry', FileType: 'folder', Files: [
				{ FileName: 'IMG', FileType: 'picture', ContentID: '1bErVbD38wUXv4vhsa0ZIyI9WDzcpPwdn',},
				{ FileName: 'Functional groups', FileType: 'picture', ContentID: '1KKorll9Oq267BFkRTHFvQrSx8bkRTBmy',},
				{ FileName: 'Naming Alkanes', FileType: 'picture', ContentID: '1YlGzpjxPFBlRn6Bvx7Gcg6Ks3gRAWMFm',},
			]},
			{ FileName: 'Notes', FileType: 'folder', Files: [
				{ FileName: 'Lesson 9', FileType: 'folder', Files: [
					{ FileName: 'Stoichiometry A', FileType: 'pdf', ContentID:'1tHmqLH1fUZB1a_kaRv9VgSmr6Z3eCkbX'}
				],},
				{ FileName: 'Lesson 10', FileType: 'folder', Files: [
					{ FileName: 'Stoichiometry B', FileType: 'pdf', ContentID: '1oDY-3rwVqo_FcoU3HxjoOc9J43lhuMFa'},
				]},
			],},
		]},
		{ FileName: 'P.T', FileType:'folder', Files: [
			{ FileName: 'P.T', FileType:'picture', ContentID:'15yx4lGXbTnBUFoB3CNxmLFnhfraDw38P'},
		]},
		{ FileName: 'Electronegativity values', FileType: 'folder', Files: [
			{ FileName: 'Electronegativity values', FileType: 'picture', ContentID:'1v1YKV1TQY9H5CqTWBUGWveLEWcigNwF8'},
		]},
	]},
	]},
	{ FileName: 'Flashcards: definitions', FileType: 'folder', Files: [
		{ FileName: 'Flash cards definitions', FileType: 'pdf', ContentID: '1HaFbUHyahk4UPwRiMYmL66QwGVgzQ8Ba'},
	]},
	];
	const { data: session, status } = useSession();

    if (!session) {
    	redirect('/signin')
    }
	return(
		<div className="py-10">
			<FileSystem title="5th year revision course I" files={files} />
		</div>
	);
}
