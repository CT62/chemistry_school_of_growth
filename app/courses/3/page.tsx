"use client"
import axios from "axios";
import FileSystem from '@/components/FilePage.tsx';
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import { useSession } from 'next-auth/react';
import prisma from '../../prisma/client';

export default function course3(){
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
                                    { FileName: 'Audio only Part A', FileType:'video',ContentID: '18Bdih7h7sQC3l5zf3yJu64K1PmyqeySE'},
                                ]
                            },
                            { FileName: 'Lesson 1 part A', FileType: 'video', ContentID: '152zjP1IXIb453dRo-m4nYbjqGXeJ8hSE'},
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
                                    { FileName: 'Audio only Part B', FileType:'video',ContentID: '18U2PDUefuJGOl7LUnwPQpvNdNVHzozZT'}
                                ]
                            },
                            { 
                                FileName: 'lesson 1 part B', 
                                FileType: 'video', 
                                ContentID: '1tGriCvEk52MXJdFMdzgF7Fx4vnP7zpk2'
                            }
                        ]
                    },
                    { 
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Acids and Base theories', 
                                FileType: 'pdf', 
                                ContentID: '1PZP7fW1ZZT8NDv5RYS-cxvdSQ2PiGJw2'
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
                                    { FileName: 'Audio only Part A', FileType:'video',ContentID: '15hEo30SoSuiPrM0j3DrHvQT4_V2JHBDi'},
                                ],
                            },
			    { FileName: 'Lesson 2 part A', FileType: 'video', ContentID: '1RMoQyXITRHAKKbPnGKjssgjNF64rbf2L'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Audio Part B', 
                                FileType:'folder',
                                Files:[
                                    { FileName: 'Audio only Part B', FileType:'video',ContentID: '1-ZRXW1SU8RIrwT4n0JPduCc71PbA9lBU'}
                                ]
                            },
                            { 
                                FileName: 'Lesson 2 part B', 
                                FileType: 'video', 
                                ContentID: '1LddPdjBXcF1bga-N6oiX55jTJXKG08vu'
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
			    { FileName: 'Lesson 3 Part A', FileType: 'video', ContentID: '1WV5zyw-LyB4_XZN5prlWbCGV8qpRTBtJ'},

			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 3 Part B 1', 
                                FileType: 'video', 
                                ContentID: '1rgq633Xm7h3c5_XpYH_TrMNbIJYGg8eo'
                            },
			    {
			    	FileName: 'Lesson 3 Part B 2',
				FileType: 'video',
				ContentID: '1WcA2UPJWRJzpvOuHjJ1Pw03UG1ncw8cX'
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
			    { FileName: 'Lesson 4 Part A', FileType: 'video', ContentID: '1PdpRHgbVUyWYPdQpvNjwmNu0qoeJtGkv'},

			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 4 Part B', 
                                FileType: 'video', 
                                ContentID: '1aeNMtlHzn6Trt0tJ_JxMlPFi6NOCinYd'
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
			    { FileName: 'Lesson 5 Part A', FileType: 'video', ContentID: '1oGlEJchyh6x2e5B8wRGY7sKHWZaWsI_M'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 5 Part B', 
                                FileType: 'video', 
                                ContentID: '1C-1qMnEqiO0MQVTgFUaizmrorwG81Ca9'
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
			    { FileName: 'Lesson 6 Part A', FileType: 'video', ContentID: '19dH94VBQo_kl4E9uCQ075mfjIbKijseN'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 6 Part B', 
                                FileType: 'video', 
                                ContentID: '1wxY0-NB37heYBNS7tWGVsL0jEw418FKd'
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
			    { FileName: 'Lesson 7 Part A', FileType: 'video', ContentID: '12xS-U18YxaTI818Ytnj14an-JkIqLrGd'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 7 Part B', 
                                FileType: 'video', 
                                ContentID: '1pB1l6hnW-m2NwUFZbGwWMX6grz5_RKfs'
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
			    { FileName: 'Lesson 8 Part A', FileType: 'video', ContentID: '1_9fHAPFfSI1AsYta2gFQlaR4OWvfhg0I'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 8 Part B', 
                                FileType: 'video', 
                                ContentID: '1oyOhszRfzQO6U3PKQRGbTny0IILQFdqq'
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
			    { FileName: 'Lesson 9 Part A', FileType: 'video', ContentID: '1SpRn7v8bJvUUN3Yd5U0PDCdjz-A-v0Fj'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Lesson 9 Part B', 
                                FileType: 'video', 
                                ContentID: '11SiBOYneRNLbBpTbnxCRRxme711u86m4'
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
			    { FileName: 'Lesson 10 Part A', FileType: 'video', ContentID: '1AbClmyG641KyciGO39OR8emdKMiMxWZ9'},
			   ]},
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
			    { FileName: 'Lesson 10 Part B', FileType: 'video', ContentID: '1WHJ2-4AQuAgwmpGhWjsRvlo4acL4oQwc'},
			   ]},

                ]
            },

        ]
    	},
	{ FileName: 'Notes', FileType: 'folder', Files: [
		{ FileName:'Acids and Bases', FileType: 'folder', Files: [
			{ FileName: 'Acids and bases HL', FileType: 'pdf', ContentID: '1PFnTx-OLveQJr0v5n06IknK1QnDsgU79',},
			{ FileName: 'Acids, bases, pH & Indicators Questions', FileType: 'pdf', ContentID: '1Su-VEvGZlDTO9r1ijXpQbtlqoaKiviiR',},
			{ FileName: 'Acids, bases, PH & Indicators Slns', FileType: 'pdf', ContentID: '1cz_UeYTne5ajoAgouzUOnhRgpvwv5UIa',},
			{ FileName: 'Acids and bases notes 1', FileType: 'pdf', ContentID: '1xOg0_QUEzGoVQ8-J14cbPjeoyRBXsLHK',},
			{ FileName: 'Acids and bases notes 2', FileType: 'pdf', ContentID: '1Y7yUxffZCu1Rz8BaQEfvSX7nQ5G6XPyw',},
			{ FileName: 'Acids and bases notes 3', FileType: 'pdf', ContentID: '1BKSqPOIusDxDGSFErn3jO2vW-9KZsCz5',},
			{ FileName: 'Acids and bases notes 4 (other topics too)', FileType: 'pdf', ContentID: '14ZixlN1MY3l8OLA_S17eXLnk1YXCSHuE',},
			{ FileName: 'Titrations theory acids & bases standard slns', FileType: 'pdf', ContentID: '1MB-nfx9Tsr9y5w0To2enNcIiBj2piJ6N',},
			{ FileName: 'Titrations theory acids & bases', FileType: 'pdf', ContentID: '11kPjUyTZ_jTskNP3L6GUAvsfwLzi_mKt',},
		]},
		{ FileName: 'Lesson Notes', FileType: 'folder', Files: [
			{ FileName: 'Acids and bases theories', FileType: 'pdf', ContentID: '1e2hDT57CjOVBQ-JeVTYlcintx8sz9E91'},
		]},
		{ FileName: 'Oxidation and reduction', FileType: 'folder', Files:[
				{ FileName: 'Oxidation and reduction questions', FileType: 'pdf', ContentID: '105oUofpEoWi8bJfMo4Rby802tICV91HG',},
				{ FileName: 'Oxidation and reduction slns', FileType: 'pdf', ContentID: '1SXs6Q5XlbTt2f7yqScBhLJBIH32EwfKn',},
				{ FileName: 'Oxidation and reduction notes', FileType: 'pdf', ContentID: '1OiP-qMen7SJCd4GGI8js1aifQjMpIUVW',},
				{ FileName: 'Oxidation and reduction', FileType: 'pdf', ContentID: '1fMvCoU8LV1c_9YqAG7mKCH77TQ6vrFMi',},

		]},
		{ FileName: 'Plan', FileType: 'folder', Files:[
			{ FileName: 'Plan', FileType: 'picture', ContentID: '1sc1N0K5PVUORITTTSLRCrS8R_NzLlMZL'},
		]},
		{ FileName: 'Volumetric analysis', FileType: 'folder', Files: [
				{ FileName: 'Volumetric analysis, acids and bases', FileType: 'pdf', ContentID: '1Vt6JEdfvNXSSrpRUg1I5WoFztZzhH_Bc',},
				{ FileName: 'Volumetric titrations', FileType: 'pdf', ContentID: '1TM3VSdQsFB4rw1El5vsZ7tifjX9cXiAW',},
				{ FileName: 'Volumetric analysis (p3-20,49-62)', FileType: 'pdf', ContentID: '1mjQ9IPvqmE7xVrNR8LzIesSUSQj1C5_3',},
			]},
	]},
	{ FileName: 'Flashcards: definitions', FileType: 'folder', Files: [
		{ FileName: 'Flash cards definitions', FileType: 'pdf', ContentID: '1HaFbUHyahk4UPwRiMYmL66QwGVgzQ8Ba'},
	]},

	{ FileName: 'Exam questions and solutions', FileType: 'folder', Files: [
		{ FileName: 'Q1', FileType: 'folder', Files:[
			{ FileName: 'Q1 experiment questions', FileType:'pdf',ContentID:'1XjD0N36WT0YHw-I_isBtqZaEqveno9C7'},
		]},
		{ FileName: 'Experiment tracker', FileType: 'folder', Files:[
			{ FileName: 'Acid-Base titrations/volumetric analysis', FileType: 'folder', Files: [
				{ FileName: 'Exam Qs covered', FileType: 'picture', ContentID:'1RMhFi8ivuK1d6TTDlSXZKW--jtC567bO'},
			]},
			{ FileName: 'Tracker NB', FileType: 'folder', Files:[
				{ FileName: 'Experiment year by year', FileType: 'pdf', ContentID:'1upzf-PZYvb114devE7Mm43MucBheKLca'},
				{ FileName: 'Experiment covered and to cover', FileType: 'pdf', ContentID:'117KugBTPsv0oiZuSEK8yecJ65UKqlhnH'}
			]}
		]},

		{ FileName: 'Lesson 1,2,3: Acid-Base theories', FileType: 'folder', Files:[
			{ FileName: 'Exam Qs & Slns', FileType:'pdf',ContentID:'1HkXfrMlyK1k-sUdbvFqoHxaX9uOp5ukV'},
			{ FileName: 'Exam Qs', FileType:'pdf',ContentID:'1apT868nzX2SY0K3SKB3XVJmltHzISB01'},
		]},
		{ FileName: 'Lesson 5: Titration', FileType: 'folder', Files:[
			{ FileName: 'Q week 5 (Q only)', FileType:'pdf',ContentID:'1SUHoNMcALqjUDDQSKUItnHrB9krjY8Vl'},
			{ FileName: 'Q week 5', FileType:'pdf',ContentID:'10CKGqJADKuDo9M8pWfKJBwp1cmXLR0w_'},
		]},
		{ FileName: 'Lesson 6,7,8', FileType: 'folder', Files:[
			{ FileName: 'Redox titration Qs LK', FileType:'pdf',ContentID:'1rjXW8z4zVjGobbQS4H1VfupisOIJyX8g'},
		]},
		{ FileName: 'Lesson 9.10', FileType: 'folder', Files:[
			{ FileName: '2002 Q10', FileType:'pdf',ContentID:'1D6SDMsHRYTuzSEw4aIXRpsx6HTHkOyHc'},
			{ FileName: 'Exam style Q', FileType:'pdf',ContentID:'1Av07p62M1R4ejBABh8iOJM3343svr6-C'},
			{ FileName: 'Oxidation and reduction', FileType:'pdf',ContentID:'1m1KpFZ_Sff3WteP4_VF1tfMSe2mGqE_E'},
		]},




	]},
	];
const { data: session, status } = useSession();
const [isPurchased, setIsPurchased] = useState(false);
const router = useRouter();

useEffect(() => {
  const fetchData = async () => {
    if (!session) {
    	router.push('/signin');
    } else {
      const response = await axios.post('/api/isPurchased', { 'CourseID': String(3), 'userEmail': session?.user?.email });
      setIsPurchased(response.data.isPurchased);
    }
  };

  fetchData();
}, [session]);

return (
  <>
    {isPurchased ? (
      <div className="py-10">
        <FileSystem title="5th year revision course part II/Experiment course part II" files={files} />
      </div>
    ) : null}
  </>
);	
}
