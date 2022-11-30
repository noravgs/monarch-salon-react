function Skill({service,source, alt, title, content}) {
 return  <>
 <h3>{service}</h3>
 <img src={source} alt={alt} title={title}/>
 <p>{content}</p>
 </>
}

export default Skill