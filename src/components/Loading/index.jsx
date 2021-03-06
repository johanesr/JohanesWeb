import './styles.scss';

function Loading(props) {
  return(
    <div className={props.curTheme ? "loading" : "loading dark"}>
      <div className="loading-text">
        Please wait while we render the pages :(
      </div>
    </div>
  );
}

export default Loading;