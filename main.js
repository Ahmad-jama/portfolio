


// nav stuff 

const body = document.body
let scrollDown = 0
document.addEventListener('scroll', () => {

  let currenSecroll = window.pageYOffset

  if(currenSecroll <= 0){
    body.classList.remove('scroll_up')
  }

  if(currenSecroll > scrollDown && !body.classList.contains('scroll_down') ){
    body.classList.add('scroll_down')
    body.classList.remove('scroll_up')
  }

  if(currenSecroll < scrollDown && body.classList.contains('scroll_down')){
    body.classList.remove('scroll_down')
    body.classList.add('scroll_up')
  }
  

  scrollDown = currenSecroll
})

// nav toglle navbar 

const ulLinks = document.querySelector('nav ul')
const openLinks = document.querySelector('nav h4')
const clonseLinks = document.querySelector('nav ul li:first-child')

openLinks.addEventListener('click' ,() => {
  ulLinks.classList.add('open')
})

clonseLinks.addEventListener('click', () => {
  ulLinks.classList.remove('open')
})

// generate project 
const projectContainer = document.querySelector('.projects_container')
const projectData = [

  {
    name:'netflix clone',
    description:'this is a full clone of netflix I build the core fearurs of the app is calling api to featch a movies information and display it like a posters and whe you click in any posters that will take you to anther route to display more information a bout the movie and will display posters for similar movies and also will show trailers about the movei. ',
    tech_uses:['css module','tmdb api', 'react', 'react-youtube', 'movie-trailer'],
    lg_image:'https://via.placeholder.com/1026x300',
    md_image:'https://via.placeholder.com/474x240/',
    sm_image:'https://via.placeholder.com/237x165',
    live:'https://full-net-clone.netlify.app',
    code:'https://github.com/Ahmad-jama/full-netflix-clone'
  }
]
let projectHtml;
projectData.map(project => {

  const {name, description,lg_image, md_image, sm_image, live, code, tech_uses} = project

  projectContainer.innerHTML += `
  <div>
      <div class="project_images">
      <img class="lg-img" src=${lg_image} alt=${name} width="1000" height="400">
      <img class="md-img" src=${md_image} alt=${name} width="480" height="240">
      <img class="sm-img" src=${sm_image} alt=${name} width="240" height="170">
    </div>
    <div class="project_info">
      <h3>${name}</h3>
      <button>
        <span>
        <a href =${live} target=_blank> live </a>
        </span>
      </button>
      <button>
        <span>
        <a href=${code} target=_blank>code </a>
        </span>
      </button>
    </div>
    <p>${description}</p>

    ${tech_uses.map( tech => `<span> ${tech} </span>`).join(' ')}
  </div>
`

  
  
})


// projectContainer.innerHTML += projectHtml

// projectContainer.innerHTML= `
//   <div class="project_images">
//     <img class="lg-img" src='https://via.placeholder.com/1026x300' alt='project-lg' width="1000" height="400">
//     <img class="md-img" src='https://via.placeholder.com/474x240/' alt='project-md' width="480" height="240">
//     <img class="sm-img" src='https://via.placeholder.com/237x165' alt=' project-sm' width="240" height="170">
//   </div>
//   <div class="project_info">
//     <h3>project name</h3>
//     <button>
//       <span>live</span>
//     </button>
//     <button>
//       <span>code</span>
//     </button>
//   </div>
//   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eum assumenda in ipsum eaque corrupti
//   officia blanditiis? Nemo velit neque cum doloremque repellendus quasi cumque praesentium. Molestiae neque eius
//   consectetur!</p>
//   <span>one</span>
//   <span>tow</span>
//   <span>three</span>
//   <span>four</span>
//   <span>five</span>
// `
