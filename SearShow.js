const SearShow=(props)=>{
    console.log(props.what);
    const hey=`https://source.unsplash.com/500x200?${props.what}`
    const hai=`https://source.unsplash.com/400x200?${props.what}`
    return(
        <>
            <img src={hey} alt="imaging"/>
            <img src={hai} alt="imaging"/>
        </>
    );
}
export default SearShow;