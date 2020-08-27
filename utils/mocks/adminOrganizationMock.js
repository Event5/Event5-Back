// // DASHBOARD ADMIN
// const adminOrganizationMock = {
//   "data":[
//     {
// 			"organization": {
//         "id": 1,
//         "name": "Facebook",
//         "user_id": 3
// 			},
//       "events": [
//         {
//           "id" : 1,
//           "event_name": "React",
//           "url": "react-event",
//           "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//           "template": 1,
//           "user_id": 3,
//           "organization_id": 1,
//           "organizers":[
//             {
//               "id": 3,
//               "username": "Mario",
//               "email": "mario@gmail.com",
//               "type_user": "organizer"
//             },
//             {
//               "id": 4,
//               "username": "juan",
//               "email": "juan@gmail.com",
//               "type_user": "organizer"
//             }
//           ]
//         },
//         {
//           "id" : 2,
//           "event_name": "Vue",
//           "url": "vue-event",
//           "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//           "template": 2,
//           "user_id": 3,
//           "organization_id": 1,
//           "organizers":[
//             {
//               "id": 3,
//               "username": "Mario",
//               "email": "mario@gmail.com",
//               "type_user": "organizer"
//             },
//             {
//               "id": 4,
//               "username": "juan",
//               "email": "juan@gmail.com",
//               "type_user": "organizer"
//             }
//           ]
//         },
//       ]
//     },
//     {
// 			"organization": {
//         "id": 1,
//         "name": "Facebook",
//         "user_id": 3
// 			},
//       "events": [
//         {
//           "id" : 1,
//           "event_name": "React",
//           "url": "react-event",
//           "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//           "template": 1,
//           "user_id": 3,
//           "organization_id": 1,
//           "organizers":[
//             {
//               "id": 3,
//               "username": "Mario",
//               "email": "mario@gmail.com",
//               "type_user": "organizer"
//             },
//             {
//               "id": 4,
//               "username": "juan",
//               "email": "juan@gmail.com",
//               "type_user": "organizer"
//             }
//           ]
//         },
//         {
//           "id" : 2,
//           "event_name": "Vue",
//           "url": "vue-event",
//           "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//           "template": 2,
//           "user_id": 3,
//           "organization_id": 1,
//           "organizers":[
//             {
//               "id": 3,
//               "username": "Mario",
//               "email": "mario@gmail.com",
//               "type_user": "organizer"
//             },
//             {
//               "id": 4,
//               "username": "juan",
//               "email": "juan@gmail.com",
//               "type_user": "organizer"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

// // DASHBOARD ORGANIZER
// const organizerEventsMock = {
//   "events":[
//     {
//       "id" : 1,
//       "event_name": "React",
//       "url": "react-event",
//       "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//       "template": 1,
//       "user_id": 3,
//       "organization_id": 1,
//       "organizers":[
//         {
//           "id": 3,
//           "username": "Mario",
//           "email": "mario@gmail.com",
//           "type_user": "organizer"
//         },
//         {
//           "id": 4,
//           "username": "juan",
//           "email": "juan@gmail.com",
//           "type_user": "organizer"
//         }
//       ]
//     },
//     {
//       "id" : 2,
//       "event_name": "Vue",
//       "url": "vue-event",
//       "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//       "template": 2,
//       "user_id": 3,
//       "organization_id": 1,
//       "organizers":[
//         {
//           "id": 3,
//           "username": "Mario",
//           "email": "mario@gmail.com",
//           "type_user": "organizer"
//         },
//         {
//           "id": 4,
//           "username": "juan",
//           "email": "juan@gmail.com",
//           "type_user": "organizer"
//         }
//       ]
//     }
//   ]
// }


// //EVENT
// const completeEventMock = {
//   "id" : 1,
//   "event_name": "Angular",
//   "url": "angular-event",
//   "event_start_date": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//   "template": 1,
//   "user_id": 3,
//   "organization_id": 1,
//   "event_data": {
//     "id": 1,
//     "logo_url": "https://images.com/logo_google",
//     "title": "Angular a big and awesome framework",
//     "event_image_url": "https://images.com/event_google",
//     "description": "Angular is a framework created by Google 100% Open Source",
//     "background_url": "https://images.com/background_google",
//     "event_id": 1,
//   },
//   "associates":[
//     { 
//       "id": 1,
//       "name": "Google",
//       "url": "https://google.com",
//       "logo_url": "https://images.com/google",
//       "relevance": true,
//       "event_id": 1
//     }
//   ],
//   "schedule":[
//     {
//       "id": 1,
//       "title": "Angular",
//       "description": "Session to learn Angular like a professional",
//       "date_time": "Sun Feb 28 2010 05:30:00 GMT+0530 (IST)",
//       "event_id": 1
//     }
//   ],
//   "speakers":[
//     {
//       "id": 1,
//       "name": "Larry Page",
//       "biography": "Lawrence Larry Edward is an American businessman, creator along with Sergei Brin of Google.",
//       "role": "Founder",
//       "twitter": "@larrypage",
//       "photo_url": "https://images.com/larrypage",
//       "schedule_id": 1,
//     }
//   ]
// }