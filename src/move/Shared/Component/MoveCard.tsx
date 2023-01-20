import React from "react";

function MoveCard(props: any) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.imageUrl} alt="thumbnail"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.name}</p>
                        <p className="subtitle is-6">{props.dance}</p>
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <a
                    href={props.videoUrl}
                    target="_blank"
                    className="card-footer-item">
                    Watch
                </a>
            </footer>
        </div>
    )
}
export default MoveCard;
