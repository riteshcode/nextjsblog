import Head from 'next/head'
import Link from 'next/Link'


const Blog = ({ data }) => {
    return(
        <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
      
        <div>
            <h1>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </h1>
        </div>
        {data.map( blog =>(
            <div class="card" key="{blog.id}" style={{ border:'2px solid black', borderRadius:'10px', margin:'10px',padding:'10px', width:'400px', float:'left',height:'400px' }} >
                <h2 className="title" >{blog.title}</h2>
                <h5>{blog.body}</h5>
                <div class="fakeimg" style={{height: 'auto'}}>Image</div>
                <p>Some text..</p>
            </div>

        ))}
        </main>
          
        </>
    )
  }

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    console.log(data)
  
    // Pass data to the page via props
    return { props: { data } }
  }


export default  Blog