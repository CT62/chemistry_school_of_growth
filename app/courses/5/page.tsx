"use client"
import FileSystem from '@/components/FilePage';

export default function course5(){

	const files = [
	{
        FileName: 'Recordings & Notes',
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
                            { FileName: 'Lesson 1 part A', FileType: 'video', ContentID: '1zMveobZTIT3UnEAZ3kQ8Ug_94Gf8U70Z'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 1 part B', 
                                FileType: 'video', 
                                ContentID: '1K45DPGabK_1qdKR806mkKuCSEBIVhrTf'
                            }
                        ]
                    },
                    { 
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Experiment 1.1', 
                                FileType: 'pdf', 
                                ContentID: '13z2jpbEQQkT75JzAnZTI0C0KE1KEJr_RNJnxx-RZRcs'
                            },
			    { 
                                FileName: 'Experiment 2.1', 
                                FileType: 'pdf', 
                                ContentID: '1GnchTP87fmyt1DFXYh6rAyd3clhAfIFe'
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
                            { FileName: 'Lesson 2 part A', FileType: 'video', ContentID: '1GhZ4dqBfHROniaQcibGzAbAW0_eiALbl'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 2 part B', 
                                FileType: 'video', 
                                ContentID: '1ViHf_TmtMh2t3K4JQncizzxhfRh6C7qu'
                            }
                        ]
                    },
                    { 
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Experiment 3.1', 
                                FileType: 'pdf', 
                                ContentID: '1FOSUydJUPTn8jgoAV5iI4P8E3krAbKAp'
                            },
			    { 
                                FileName: 'Experiment 4.1 & 5.1', 
                                FileType: 'pdf', 
                                ContentID: '1g_h81x3Y-xkPs4xZYgGR4mCZL7O6Fvjg'
                            },
			    { 
                                FileName: 'Experiment 6.1', 
                                FileType: 'pdf', 
                                ContentID: '1k4GdQQtPNM-_HqBNMaZlCi7Cp41YQZCc'
                            }


                        ]
                    }
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
                            { FileName: 'Lesson 3 part A', FileType: 'video', ContentID: '1VLR3196vVpiCL4JA16FhlyznnVbn8hIq'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 3 part B', 
                                FileType: 'video', 
                                ContentID: '1nldaCXo-eze8LWLXHGQmjoVgvEsRbWvG'
                            }
                        ]
                    },
                    { 
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Experiment 7.1', 
                                FileType: 'pdf', 
                                ContentID: '16eOG8Cikc1ry_HZAQPqtzlh6WgyZFYwe4OrwzgOQoI4'
                            },

                        ]
                    }
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
                            { FileName: 'Lesson 4 part A', FileType: 'video', ContentID: '19pcyN4AtEwbN4tbX4kj-6GDfLvvVbMNV'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 4 part B', 
                                FileType: 'video', 
                                ContentID: '1d7_lJtWUGw88C23beb1kRwn7vf2ZUM9b'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Experiment 8.1', 
                                FileType: 'pdf', 
                                ContentID: '100Lh2LcLSDvltURECG5S9LhE8xdOAxCo'
                            },
			    { 
                                FileName: 'Experiment 8.2', 
                                FileType: 'pdf', 
                                ContentID: '1ELDDslD1e-BWuSN_xsQ8gmz-3zvu6_Ff'
                            },
			    { 
                                FileName: 'Experiment 8.4', 
                                FileType: 'pdf', 
                                ContentID: '1amy1_UQy45f7VvPlH3ByBRzaIb5E6ZjE'
                            },

                        ]
                    }]},
		{ 
                FileName: 'Lesson 5', 
                FileType:'folder', 
                Files:[
                    { 
                        FileName: 'Part A', 
                        FileType: 'folder', 
                        Files:[
                            { FileName: 'Lesson 5 part A', FileType: 'video', ContentID: '1FP_vTvDMiWybMniZGGwTpS4jJfRapT7g'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 5 part B', 
                                FileType: 'video', 
                                ContentID: '1xHf44q8nBdX3Mt44oqM-UaUX8YSGn0lE'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Experiment 8.3', 
                                FileType: 'pdf', 
                                ContentID: '11eaGDZgM0MF-2peH3Jv0JsjsEYk07g6-'
                            },
			    { 
                                FileName: 'Experiment 9.1,9.2,9.3', 
                                FileType: 'pdf', 
                                ContentID: '1rFl60MlOQ4Pkg6TzGajXpNozDzdDtfTY'
                            },
			    { 
                                FileName: 'LC chemistry titrations poster', 
                                FileType: 'pdf', 
                                ContentID: '1UeXIfXdI1pXChjH5ExkFcHGtqHaeKqgk'
                            },
			    { 
                                FileName: 'Mandatory experiment 10.1', 
                                FileType: 'pdf', 
                                ContentID: '1sDV2I5vAmHREWsDX4hOtDWemUbrVp4RA'
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
                            { FileName: 'Lesson 6 part A', FileType: 'video', ContentID: '1zr_57YhfowYXaMUTOwwTg42tY-hjQJEZ'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 6 part B', 
                                FileType: 'video', 
                                ContentID: '1j5EpbL10op7GjD-r9fj6eGPceLvv9JAE'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'Experiment 10.1', 
                                FileType: 'pdf', 
                                ContentID: '1hjJwH50Dc8teHniLVQ0lixF9LFFURLs_'
                            },
			    { 
                                FileName: 'Experiment 10.2', 
                                FileType: 'pdf', 
                                ContentID: '1JhFryctzlAvNaTympVAzvFLXzDfOfXEW'
                            },
			    { 
                                FileName: 'Experiment 10.3', 
                                FileType: 'pdf', 
                                ContentID: '1ej5U762ei2agKbZGtasqwD0kB8gtQJ66'
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
                            { FileName: 'Lesson 7 part A', FileType: 'video', ContentID: '1Ea5YOx6ley6cmbzLO5QSt4AN6qzlPB-E'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 7 part B', 
                                FileType: 'video', 
                                ContentID: '1zWK11Gdp5p9lNNu4EeNLAIj2hHVNEVdE'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
			    { 
                                FileName: 'Experiment 11.1', 
                                FileType: 'pdf', 
                                ContentID: '1pGjk_QvTEqJOTaHHrsjBka7Fl-FlsSRI'
                            },
			    { 
                                FileName: 'Experiment 11.2', 
                                FileType: 'pdf', 
                                ContentID: '1dy69-ZmqNbi9skl0zKbf42BXIfebFhsO'
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
                            { FileName: 'Lesson 8 part A', FileType: 'video', ContentID: '1dAcQwhKUonRzRwTrul8fftC73w62gH-v'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 8 part B', 
                                FileType: 'video', 
                                ContentID: '1L3glv3IIcCaZEAXuskb6UU82El_Vffln'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
			    { 
                                FileName: 'Experiment 11.3', 
                                FileType: 'pdf', 
                                ContentID: '1vQvy1VIMajNYAcdQ1X7Fiq_URDKpemuh'
                            },
			    { 
                                FileName: 'Experiment 11.4', 
                                FileType: 'pdf', 
                                ContentID: '1rOTWM8kClIWM2nQjkNIqecUo1SWScSGB'
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
                            { FileName: 'Lesson 9 part A', FileType: 'video', ContentID: '11cT6VfHalKaT6mrQfEJ5YaPRF4oYmHsF'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 9 part B', 
                                FileType: 'video', 
                                ContentID: '1HYxq7178HVNXbcWbkLAO6lreAatBjLvn'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
			    { 
                                FileName: 'Experiment 11.5', 
                                FileType: 'pdf', 
                                ContentID: '1PfgsDpPnhJjkbJ20WiP-BCFDrIx5WXZJ'
                            },
			    { 
                                FileName: 'Experiment 11.7', 
                                FileType: 'pdf', 
                                ContentID: '1beedGttvJCu5g7EoQRf1tbgIk9THmoLq'
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
                            { FileName: 'Lesson 10 part A', FileType: 'video', ContentID: '1d04wTmEYTLf17avKvW2YHhXAO0fzE8eo'},
                        ]
                    },
                    { 
                        FileName: 'Part B', 
                        FileType: 'folder', 
                        Files:[
                            { 
                                FileName: 'lesson 10 part B', 
                                FileType: 'video', 
                                ContentID: '1Kzki_2jp_LWY2bNEWGgadmmC7wW_-Pix'
                            }
                        ]
                    },
                    {
                        FileName: 'Notes', 
                        FileType: 'folder', 
                        Files:[
			    { 
                                FileName: 'Mandatory experiment 11.8', 
                                FileType: 'pdf', 
                                ContentID: '1QBym4a_n-DT9X3CIHWtvIge7QvWDbSQi'
                            },
			    { 
                                FileName: 'Experiment 11.6', 
                                FileType: 'pdf', 
                                ContentID: '12WQE8Sxnqtau_VXRTJ7o1cqpV0kXgBtN'
                            },

			    { 
                                FileName: 'Extra exam questions', 
                                FileType: 'pdf', 
                                ContentID: '138dPL_DZld4lt0RI2RJUprcM92BHGJnO'
                            },

                        ]
                    },



                ]
            },






    	]

	},
	{ FileName: 'External notes', FileType:'folder', Files:[
		{ FileName: '1. Chemistry experiment booklet', FileType: 'pdf', ContentID:'1m0WSbH1adyuCeJdMkjexg8JplnuSq2s8' },
		{ FileName: '2. Chemistry experiments', FileType: 'pdf', ContentID:'1OlN8VR3XP-bX3HUF6Wdh7hotMd03C4bW' },
		{ FileName: '3. Volumetric analysis, acids & bases HL', FileType: 'pdf', ContentID:'1SsNcbycdxRAeN7QHmM07podRFt51WXgx' },
		{ FileName: '4. Instrumentation HL', FileType: 'pdf', ContentID:'1YRCGW-WQpwNOLI4cYxiQzLmubbL-LHom' },
		{ FileName: '5. Chemical equations, tests for anions HL', FileType: 'pdf', ContentID:'1DGYFjZiPjafwUId0bTnFcjvyAKD2Mt8N' },
		{ FileName: '6. Organic experiments', FileType: 'pdf', ContentID:'1r8Pf3QKSCuEg-HwqtAfiJf_-u0sypESp' },
		{ FileName: 'Oxidation and reduction notes', FileType: 'pdf', ContentID:'1DNXE21RFXnEWvTQY3Pps-rH6S92JUXOa' },
		{ FileName: 'Where to find redox titrations in the exam', FileType: 'pdf', ContentID:'1WKdlitqImH4_1T7wL390_JYr5PbdIggl' },
	]},
	{ FileName: 'Q1 experiment questions', FileType:'folder', Files:[
		{ FileName: 'Exam Qs & Slns', FileType: 'folder', Files:[
			{ FileName: 'Q1 Experiment Questions', FileType:'pdf', ContentID:'12lc0B702Qez2Lfl5ZG1LN51BHSSCyt9_',}
		]},
		{ FileName: 'Tracker NB', FileType: 'folder', Files:[
			{ FileName: 'Experiment year by year', FileType: 'pdf', ContentID:'1OqRQKUwQTonApXzxavvOFZy-Omc_Mbf5'},
			{ FileName: 'Experiments covered and to cover', FileType: 'pdf', ContentID:'1Pf6wvcG13q7_GoHOpM4eaq2N_ScAvXoQ'},
		]},
		
	]}
	]


	return(
		<div className="py-10">
			<FileSystem title="Experiment course part II" files={files} />
		</div>
	);
}
