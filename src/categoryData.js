const input = [
  {
    id: 1,
    title: "Artistic approach",
    category: "Art",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    image: require("assets/img/faces/joe-gardner-2.jpg"),
    represent: "hide",
    date: "Oct 2020",
  },
  {
    id: 2,
    title: "Paint with us",
    category: "Art",
    text:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
    image: require("assets/img/faces/kaci-baum-2.jpg"),
    represent: "hide",
    date: "Nov 2020",
  },
  {
    id: 3,
    title: "Be creative",
    category: "Art",
    text:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
    image: require("assets/img/faces/joe-gardner-2.jpg"),
    represent: "hide",
    date: "Sep 2020",
  },
];

const data = [
  {
    id: 1,
    name: "Unpredictable Utopia",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",

    link: "/travel",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 2,
    name: "Bold is the new beautiful",
    image:
      "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
    link: "/fashion",
    backimage: require("assets/Category-Header-Images/fashion.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 3,
    name: "Rewind",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    link: "/history",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 4,
    name: "Claim to fame",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80",
    link: "/entertainment",
    backimage: require("assets/Category-Header-Images/entertainment.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 5,
    name: "Shape of You",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/health",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 6,
    name: "Bits & Bytes Buzz",
    image:
      "https://images.unsplash.com/photo-1539628399213-d6aa89c93074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    link: "/quiz",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 7,
    name: "Crystal Gazing",
    image:
      "https://images.unsplash.com/photo-1515942661900-94b3d1972591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/horoscope",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 8,
    name: "House of Grandeur",
    image:
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    link: "/lifestyle",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 9,
    name: "Getting Hitched",
    image:
      "https://images.unsplash.com/photo-1553915632-175f60dd8e36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/weddings",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 10,
    name: "Doorway to new era",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80",
    link: "/technology",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 11,
    name: "Pandemic Pause",
    image:
      "https://images.unsplash.com/photo-1586864387564-ea6bc7ceb97c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/covid",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 12,
    name: "Stepping Stone",
    image:
      "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
    link: "/careers",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
  {
    id: 13,
    name: "Edible Network",
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80",
    link: "/food",
    backimage: require("assets/Category-Header-Images/Travel.jpg"),
    circleimage: require("assets/img/faces/joe-gardner-2.jpg"),
    blogs: input,
  },
];

export default data;
