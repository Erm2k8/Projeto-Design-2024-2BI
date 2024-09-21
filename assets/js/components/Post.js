export default class Post {
	constructor() {
		this.container = document.getElementById("main-posts");
		this.posts = document.getElementById("posts");
	}

	createPosts() {
		const postsHTML = `
            <div id="feed">
                <div id="filter">
                    <button id="followed" class="active">Seguindo</button>
                    <button id="all">Todos os posts</button>
                </div>
                <div id="posts">
                </div>
                <p id="creditos">Desenvolvido por Danilo e Ermesson.</p>
            </div>
        `;

		this.container.innerHTML = postsHTML;
	}

	createPost(
		dateAndTime = "12h34 • 09 Jan 2024",
		name = "",
		username = "",
		text = "",
		imagePath = null
	) {
		this.posts = document.getElementById("posts");

		const profilePicPath = "/assets/images/feed/profile-pic.svg";
		const optionsDotsPath = "/assets/images/feed/options-dots.svg";
		const likePath = "/assets/images/feed/like.svg";
		const commentPath = "/assets/images/feed/comment.svg";
		const sharePath = "/assets/images/feed/share.svg";

		const postHTML = `
            <div class="post">
                <div class="post-header">
                    <div class="profile-pic">
                        <img
                            src="${profilePicPath}"
                            alt="Profile Pic"
                        />
                    </div>
                    <div class="profile-links">
                        <p class="username"><a href="#">${name}</a></p>
                        <p class="user-at"><a href="#">${username}</a></p>
                    </div>
                    <div class="options">
                        <a href="#">
                            <img
                                src="${optionsDotsPath}"
                                alt="Options"
                            /></a>
                    </div>
                </div>
                <div class="post-body">
                    <p>
                        ${text}
                    </p>
                    ${
						imagePath
							? '<div class="post-image"><img src="' +
							  imagePath +
							  '" alt="Post Image" /></div>'
							: ""
					}

                </div>
                <div class="post-footer">
                    <div class="icons">
                        <img
                            src="${likePath}"
                            alt="Like"
                        />
                        <img
                            src="${commentPath}"
                            alt="Comment"
                        />
                        <img
                            src="${sharePath}"
                            alt="Share"
                        />
                    </div>
                    <div class="datetime">${dateAndTime}</div>
                </div>
            </div>
        `;

		this.posts.innerHTML += postHTML;
	}
}