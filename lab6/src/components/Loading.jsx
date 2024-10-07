const Loading = ({loading, children}) =>
{
    return <div>
        {loading && <div className="Circle"></div>}
        {children}
    </div>
}

export default Loading;