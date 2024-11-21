export default function Modal({show,item}){
    if(!show){
        return null;
    }
    let thumnail=item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.smallThumbnail;   
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close"></button>
                <div className="inner-box">
                    <img src={thumnail} alt="" />
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3><br/>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publisherDate}</span></h4><br/>
                        <a href={item.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <h4 className="description">{item.volumeInfo.description}</h4>
            </div>
        </div>
        </>
    );
}