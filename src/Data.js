let movies= [
    {
      name: "Naane Varuvean",
      poster: "http://onlookersmedia.in/wp-content/uploads/2022/08/naane-varuven-new-poster-3.jpg",
      rating: 8.5,
      summary:
        "Naane Varuvean is a 2022 Indian Tamil-language horror thriller film written by Dhanush and directed by Selvaraghavan, starring both of them.Dhanush appears in a dual role for the third time after Kodi and Pattas, and Naane Varuvean marks his reunion with Selvaraghavan after Mayakkam Enna. "
    },
    {
      name: "Ponniyin Selvan: I",
      poster: "https://www.nowrunning.com/content/movie/2020/ponni-24737/Stills/ponniyin_selvan_2022915.jpg",
      rating: 8.6,
      summary:
        "Ponniyin Selvan: I is a 2022 Indian Tamil-language epic period action drama film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan. Produced by Ratnam and Subaskaran Allirajah under Madras Talkies and Lyca Productions, it is the first of two cinematic parts based on Kalki Krishnamurthy's 1955 novel, Ponniyin Selvan. The film stars an ensemble cast including Vikram, Aishwarya Rai Bachchan, Jayam Ravi, Karthi, Trisha, Jayaram, Aishwarya Lekshmi, Sobhita Dhulipala, Prabhu, R. Sarathkumar, Vikram Prabhu, Prakash Raj, Rahman, R. Parthiban and Lal. "
    },
    {
      name: "Thiruchitrambalam",
      poster: "https://m.media-amazon.com/images/M/MV5BMjI4Y2I5ZDYtYWVjZC00MTkzLWI1ZmYtNDYyNDExYzYwYTQxXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
      rating: 8,
      summary:
        "A delivery driver navigates life while living with his strict policeman father and sassy grandfather. Meanwhile, he's caught between two women. "
    },
    {
      name: "Vikram",
      poster: "https://pbs.twimg.com/media/FXIMYVtaAAAIKPN.jpg",
      rating: 9.6,
      summary:
        "Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films International.The film stars Kamal Haasan,Fahadh Faasil and Vijay Sethupathi.Kalidas Jayaram,Narain and Chemban Vinod Jose play supporting roles while Suriya makes a cameo appearance as Rolex.  "
    },
    {
      name: "K.G.F: Chapter 2",
      poster: "https://editzstock.com/wp-content/uploads/2022/04/Rocking-Star-Yash-KGF-Chapter-2-Hd-Wallpaper-Background-Download-Free.jpg",
      rating: 8.4,
      summary:
        "K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty and Prakash Raj.  "
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    
      {
        name: "RRR",
        poster:
          "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 9.2,
        summary:
          "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
      },
      {
        name: "Iron man 2",
        poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary:
          "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
      },
      {
        name: "No Country for Old Men",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        rating: 8.1,
        summary:
          "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
      },
      
      {
        name: "The Avengers",
        rating: 8,
        summary:
          "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
        poster:
          "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
      },
      
      {
        name: "Ratatouille",
        poster:
          "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        rating: 8,
        summary:
          "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
      }
    ];