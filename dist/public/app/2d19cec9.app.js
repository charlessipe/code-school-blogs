"use strict";angular.module("topProgrammingBlogsApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","firebase"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0)}]),angular.module("topProgrammingBlogsApp").factory("TwitterService",["$http","$q",function(a,b){var c=function(c){var d=b.defer();return a.get("/twitter/user/"+c).success(function(a){return d.resolve(a)}).error(function(a){return d.reject(a)}),d.promise};return{getUser:c}}]).factory("MozService",["$http","$q",function(a,b){var c=function(c){var d=b.defer();return a.get("/api/url-metrics/"+c).success(function(a){return d.resolve(a)}).error(function(a){return d.reject(a)}),d.promise};return{getMoz:c}}]).controller("MainCtrl",["$scope","$http","$firebaseObject","$firebaseArray","$resource","TwitterService","MozService","$state",function(a,b,c,d,e,f,g,h){a.currentTwitterCount=[],a.getTwitterCountWild=function(b){var c=n[b].twitterName;f.getUser(c).then(function(c){a.twitterErrors=void 0,a.follower=c,a.currentTwitterCount[b]=c,a.updateTwitter=function(){var c=n[b];c.twitterFollowers=a.follower,n.$save(c)},a.updateTwitter()})["catch"](function(a){console.error("there was an error retrieving data: ",a)})},a.getTwitterStartupBlogs=function(b){var c=a.startupBlogs[b].twitterName;f.getUser(c).then(function(c){a.twitterErrors=void 0,a.follower=c,a.currentTwitterCount[b]=c,a.updateTwitter=function(){var c=a.startupBlogs[b];c.twitterFollowers=a.follower,a.startupBlogs.$save(c)},a.updateTwitter()})["catch"](function(a){console.error("there was an error retrieving data: ",a)})},a.getTwitterCodingBootcamps=function(b){var c=a.codingBootcamps[b].twitterName;f.getUser(c).then(function(c){a.twitterErrors=void 0,a.follower=c,a.currentTwitterCount[b]=c,a.updateTwitter=function(){var c=a.codingBootcamps[b];c.twitterFollowers=a.follower,a.codingBootcamps.$save(c)},a.updateTwitter()})["catch"](function(a){console.error("there was an error retrieving data: ",a)})},a.getTwitterOnlineMarketing=function(b){var c=a.onlineMarketing[b].twitterName;f.getUser(c).then(function(c){a.twitterErrors=void 0,a.follower=c,a.currentTwitterCount[b]=c,a.updateTwitter=function(){var c=a.onlineMarketing[b];c.twitterFollowers=a.follower,a.onlineMarketing.$save(c)},a.updateTwitter()})["catch"](function(a){console.error("there was an error retrieving data: ",a)})},a.updateBlogScore=function(b){var c=a.blogs[b].votes.length,d=a.blogs[b].linkingsites,e=a.blogs[b].mozrank,f=a.blogs[b].pageauthority,g=a.blogs[b].twitterFollowers,h=c+5e-5*d+.05*e+.025*f+5e-5*g,i=a.blogs[b];i.blogScore=h,a.blogs.$save(i)},a.updateBlogScoreWild=function(a){var b=n[a].votes.length,c=n[a].linkingsites,d=n[a].mozrank,e=n[a].pageauthority,f=n[a].twitterFollowers,g=b+5e-5*c+.05*d+.025*e+5e-5*f,h=n[a];h.blogScore=g,n.$save(h)},a.updateBlogScoreStartupBlogs=function(b){var c=a.startupBlogs[b].votes.length,d=a.startupBlogs[b].linkingsites,e=a.startupBlogs[b].mozrank,f=a.startupBlogs[b].pageauthority,g=a.startupBlogs[b].twitterFollowers,h=c+5e-5*d+.05*e+.025*f+5e-5*g,i=a.startupBlogs[b];i.blogScore=h,a.startupBlogs.$save(i)},a.updateBlogScoreCodingBootcamps=function(b){var c=a.codingBootcamps[b].votes.length,d=a.codingBootcamps[b].linkingsites,e=a.codingBootcamps[b].mozrank,f=a.codingBootcamps[b].pageauthority,g=a.codingBootcamps[b].twitterFollowers,h=c+5e-5*d+.05*e+.025*f+5e-5*g,i=a.codingBootcamps[b];i.blogScore=h,a.codingBootcamps.$save(i)},a.updateBlogScoreOnlineMarketing=function(b){var c=a.onlineMarketing[b].votes.length,d=a.onlineMarketing[b].linkingsites,e=a.onlineMarketing[b].mozrank,f=a.onlineMarketing[b].pageauthority,g=a.onlineMarketing[b].twitterFollowers,h=c+5e-5*d+.05*e+.025*f+5e-5*g,i=a.onlineMarketing[b];i.blogScore=h,a.onlineMarketing.$save(i)},a.currentImage="/assets/images/e173c4e1.balloons.jpeg",a.randomImage=function(){a.backgroundImage=["/assets/images/2b7451d3.mountain-sunset.jpg","/assets/images/9b7784c6.telephone.jpg","/assets/images/f1f979cd.grand-central.jpg","/assets/images/e173c4e1.balloons.jpeg","/assets/images/d5bf250b.northern-lights.jpg","/assets/images/69a6ccd8.city-river.jpg","/assets/images/8c8e710d.rainy-window.jpg","/assets/images/1beab92e.snow-trees.jpg","/assets/images/d4ddfb4c.coffee.jpg","/assets/images/9d1edd5e.cave-light.jpg","/assets/images/34359942.ocean.jpg","/assets/images/0d8c0849.sea-sunset.jpg","/assets/images/93f76bcd.rock-forest.jpg","/assets/images/2b7451d3.mountain-sunset.jpg"];var b=Math.floor(13*Math.random()+1);a.currentImage=a.backgroundImage[b]},a.randomImage(),a.getMozDataWild=function(b){var c=n[b].url;g.getMoz(c).then(function(c){a.twitterErrors=void 0,a.mozData=c,a.updateMozWild=function(){var c=n[b];c.mozrank=a.mozData.umrp,c.pageauthority=a.mozData.upa,c.linkingsites=a.mozData.ueid,n.$save(c)},a.updateMozWild()})["catch"](function(a){console.error("there was an error retrieving data: ",a)})};var i=new Firebase("https://top-programming.firebaseio.com/"),j=new Firebase("https://seattle-startups.firebaseio.com/"),k=new Firebase("https://coding-bootcamps.firebaseio.com/"),l=new Firebase("https://personal-dev.firebaseio.com/"),m=new Firebase("https://online-marketing.firebaseio.com/");a.data=c(i),a.data2=c(j),a.data3=c(k),a.data4=c(l),a.data5=c(m),a.blogs=d(i),a.blogs.$loaded().then(function(b){a.currentRss=new Array(b.length),a.currentTwitterCount=new Array(b.length)}),a.startupBlogs=d(j),a.codingBootcamps=d(k),a.personalDev=d(l),a.onlineMarketing=d(m);var n=a.personalDev;a.$state=h,console.log("The current state is "+h.current.name),a.currentBlogArray=function(){"online-marketing"===h.current.name?n=a.onlineMarketing:"personal-development"===h.current.name&&(n=a.personalDev)},a.currentBlogArray(),i.authWithOAuthPopup("facebook",function(b,c){b?console.log("Login Failed!",b):(console.log("Authenticated successfully with payload:",c),a.currentUid=c.uid,a.userName=c.facebook.displayName,a.$apply())}),a.showRss=function(b){function c(){var c=new google.feeds.Feed(d);c.load(function(c){if(!c.error){var d=c.feed.entries[0];a.currentRss[b]=d,a.updateRss=function(){var c=a.blogs[b];c.rssTitle=a.currentRss[b].title,c.rssUrl=a.currentRss[b].link,a.blogs.$save(c)},a.updateRss()}a.$apply()})}var d=a.blogs[b].rssFeed;google.load("feeds","1"),c()},a.showRss3=function(b){function c(){var c=new google.feeds.Feed(d);c.load(function(c){if(!c.error){var d=c.feed.entries[0];a.currentRss[b]=d,a.updateRss=function(){var c=a.startupBlogs[b];c.rssTitle=a.currentRss[b].title,c.rssUrl=a.currentRss[b].link,a.startupBlogs.$save(c)},a.updateRss()}a.$apply()})}var d=a.startupBlogs[b].rssFeed;google.load("feeds","1"),c()},a.showRss4=function(b,c){function d(){var c=new google.feeds.Feed(e);c.load(function(c){if(!c.error){var d=c.feed.entries[0];a.currentRss[b]=d,a.updateRss=function(){var c=a.codingBootcamps[b];c.rssTitle=a.currentRss[b].title,c.rssUrl=a.currentRss[b].link,a.codingBootcamps.$save(c)},a.updateRss()}a.$apply()})}var e=a.codingBootcamps[b].rssFeed;google.load("feeds","1"),d()},a.showRss5=function(b,c){function d(){var c=new google.feeds.Feed(e);c.load(function(c){if(!c.error){var d=c.feed.entries[0];a.currentRss[b]=d,a.updateRss=function(){var c=a.personalDev[b];c.rssTitle=a.currentRss[b].title,c.rssUrl=a.currentRss[b].link,a.personalDev.$save(c)},a.updateRss()}a.$apply()})}var e=a.personalDev[b].rssFeed;google.load("feeds","1"),d()},a.showRss6=function(b,c){function d(){var c=new google.feeds.Feed(e);c.load(function(c){if(!c.error){var d=c.feed.entries[0];a.currentRss[b]=d,a.updateRss=function(){var c=a.onlineMarketing[b];c.rssTitle=a.currentRss[b].title,c.rssUrl=a.currentRss[b].link,a.onlineMarketing.$save(c)},a.updateRss()}a.$apply()})}var e=a.onlineMarketing[b].rssFeed;google.load("feeds","1"),d()},a.addBlog=function(){var b=a.newContent,c=a.newMainUrl,d=a.newTwitter,e=a.newTwitUrl,f=a.newRss,g={name:b,url:"www.mozexampleurl.com",pageauthority:0,linkingsites:0,mozrank:0,pagerank:5,votes:[1],twitterName:d,twitterUrl:e,twitterFollowers:100,rssFeed:f,blogScore:100,rssTitle:"Newly Submitted Blog",rssUrl:"http://www.google.com/",mainUrl:c};a.blogs.$add(g),a.blogs.$save(g)},a.addBlogWild=function(){var b=a.newContent,c=a.newMainUrl,d=a.newTwitter,e=a.newTwitUrl,f=a.newRss,g=a.newMozUrl,h={name:b,url:g,pageauthority:0,linkingsites:0,mozrank:0,pagerank:5,votes:[1],twitterName:d,twitterUrl:e,twitterFollowers:100,rssFeed:f,blogScore:100,rssTitle:"Newly Submitted Blog",rssUrl:"http://www.google.com/",mainUrl:c};n.$add(h),n.$save(h)},a.addVote=function(b){if(b.votes.indexOf(a.currentUid)<0){var c=b;c.votes.push(a.currentUid),a.blogs.$save(c)}else{var c=b,d=c.votes.indexOf(a.currentUid);c.votes.splice(d,1),a.blogs.$save(c)}},a.addVoteWild=function(b){if(b.votes.indexOf(a.currentUid)<0){var c=b;c.votes.push(a.currentUid),n.$save(c)}else{var c=b,d=c.votes.indexOf(a.currentUid);c.votes.splice(d,1),n.$save(c)}},a.addVoteCodingBootcamps=function(b){if(b.votes.indexOf(a.currentUid)<0){var c=b;c.votes.push(a.currentUid),a.codingBootcamps.$save(c)}else{var c=b,d=c.votes.indexOf(a.currentUid);c.votes.splice(d,1),a.codingBootcamps.$save(c)}},a.addVoteStartupBlogs=function(b){if(b.votes.indexOf(a.currentUid)<0){var c=b;c.votes.push(a.currentUid),a.startupBlogs.$save(c)}else{var c=b,d=c.votes.indexOf(a.currentUid);c.votes.splice(d,1),a.startupBlogs.$save(c)}},a.addVoteOnlineMarketing=function(b){if(b.votes.indexOf(a.currentUid)<0){var c=b;c.votes.push(a.currentUid),a.onlineMarketing.$save(c)}else{var c=b,d=c.votes.indexOf(a.currentUid);c.votes.splice(d,1),a.onlineMarketing.$save(c)}},a.sortBy="-blogScore"}]),angular.module("topProgrammingBlogsApp").config(["$stateProvider",function(a){a.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),a.state("about",{url:"/about",templateUrl:"app/about.html",controller:"MainCtrl"}),a.state("instructions",{url:"/instructions",templateUrl:"app/instructions.html",controller:"MainCtrl"}),a.state("seattle-startups",{url:"/seattle-startups",templateUrl:"app/seattle-startups.html",controller:"MainCtrl"}),a.state("add-blog",{url:"/add-blog",templateUrl:"app/add-blog.html",controller:"MainCtrl"}),a.state("coding-bootcamps",{url:"/coding-bootcamps",templateUrl:"app/coding-bootcamps.html",controller:"MainCtrl"}),a.state("personal-development",{url:"/personal-development",templateUrl:"app/personal-development.html",controller:"MainCtrl"}),a.state("online-marketing",{url:"/online-marketing",templateUrl:"app/online-marketing.html",controller:"MainCtrl"})}]),angular.module("topProgrammingBlogsApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("topProgrammingBlogsApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("topProgrammingBlogsApp").run(["$templateCache",function(a){a.put("app/about.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class=row><div class=col-lg-12><p>Hello {{ userName }}.</p><h1>Top Programming Blogs</h1><p>Top Programming Blogs ranks the top blogs in the programming field based on votes by the community and website metrics. Features of the application include:</p><h3><span class="glyphicon glyphicon-ok"></span> The Top Blogs Ranked by Votes and Website Metrics</h3><p>The blogs are ranked according to the number of votes, MozRank, Page Authority, external links to the URL, and Twitter followers.</p><h3><span class="glyphicon glyphicon-ok"></span> View Your Favorite Blogs</h3><p>You can view only the blogs you upvoted by clicking on the button "View My Favorite Blogs" as long as you are logged into Facebook.</p><h3><span class="glyphicon glyphicon-ok"></span> View the Latest Article from Each Blog</h3><p>The latest article from each blog is displayed allowing you to quickly scan the top blogs for article titles of interest.</p><p>Top Programming Blogs is the capstone project of Charles Sipe for the Bloc Front-End Development Online Bootcamp. You can read more about his bootcamp experience at <a href="http://www.charlessipe.com/bloc-review/">http://www.charlessipe.com/bloc-review/</a>.</p><p>Please send feedback to Charles Sipe at csipe84(at)gmail.com.</p><footer class=footer><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></footer></div></div></div>'),a.put("app/add-blog.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class=row><div class=col-lg-12><p>Hello {{ userName }}.</p><h1>Add Blog</h1><div class=row><div class="col-lg-12 suggest-blog"><p><span class="glyphicon glyphicon-plus-sign"></span> Suggest a Blog</p><form><span>Title:</span> <input ng-model="newContent"><br><span>Blog URL:</span> <input ng-model="newMainUrl"><br><span>Moz URL:</span> <input ng-model="newMozUrl"><br><span>Twitter:</span> <input ng-model="newTwitter"><br><span>Twitter URL:</span> <input ng-model="newTwitUrl"><br><span>RSS Feed:</span> <input ng-model="newRss"><br><button class=add-blog type=submit data-ng-click=addBlogWild()>Add Blog</button></form><p>All fields must be filled for a new blog to be added.</p></div></div><footer class=footer><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></footer></div></div></div>'),a.put("app/coding-bootcamps.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=.container-fluid><div class=row><div class="col-xs-12 top-section"><!--<a href="">Log In To Vote</a><br> \n    <a href="">Log Out</a> --><p>Hello {{ userName }}.</p><h1>Top Coding Bootcamp Blogs</h1><p>Top Coding Bootcamp Blogs ranks the top coding bootcamp blogs based on the votes by the community and website metrics.</p><p>Tip: Click on the <span class="glyphicon glyphicon-thumbs-up"></span> to vote for a blog.</p></div></div><div class=row><div class="col-xs-12 table-container" style="background-image: url(\'{{currentImage}}\')"><table class="table table-bordered"><thead><tr><th>Number</th><th width=10% class=sortable-column ng-click="sortBy = \'name\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Blog Title</th><th class=sortable-column ng-click="sortBy = \'-votes.length\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Votes</th><th class=sortable-column ng-click="sortBy = \'-mozrank\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Moz Rank</th><th class=sortable-column ng-click="sortBy = \'-pageauthority\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Page Authority</th><th class=sortable-column ng-click="sortBy = \'-linkingsites\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> External Links</th><th>Twitter Name</th><th class=sortable-column ng-click="sortBy = \'-twitterFollowers\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Followers</th><th>Lastest Article</th></tr></thead><tbody><tr ng-repeat="blog in codingBootcamps | orderBy: sortBy | filter:filters"><td>{{$index+1}}</td><td class=text-left><a href="{{ blog.mainUrl }}">{{ blog.name }}</a></td><td><span class="glyphicon glyphicon-thumbs-up hover-blue" data-ng-click=addVoteCodingBootcamps(blog)></span> {{ blog.votes.length }}</td><td>{{ blog.mozrank | number:2 }}</td><td ng-init=updateBlogScoreCodingBootcamps($index)>{{ blog.pageauthority | number:2 }}</td><td ng-init=getMozDataWild($index)>{{ blog.linkingsites | number }}</td><td><a href="{{ blog.twitterUrl }}">{{ blog.twitterName }}</a></td><td>{{ blog.twitterFollowers | number }}</td><td class=text-left ng-init=showRss4($index)><a href={{blog.rssUrl}} target=_blank>{{blog.rssTitle}}</a><!-- {{blog.rssFeed}} --></td><button ng-click="filters.votes = currentUid" type=button class="btn btn-primary">View My Favorite Blogs</button> <button ng-click="filters = undefined" type=button class="btn btn-info">View All Blogs</button></tr></tbody></table></div></div><div class=row><div class="col-lg-12 suggest-blog"><p><span class="glyphicon glyphicon-plus-sign"></span> Suggest a Blog</p><p>To suggest a blog to be added to this list please email csipe84(at)gmail.com</p></div></div></div><!--\n<header class="hero-unit" id="banner">\n  <div class="container">\n    <h1>\'Allo, Charles</h1>\n    <p class="lead">Kick-start your next web app with Angular Fullstack</p>\n    <img src="assets/images/d535427a.yeoman.png" alt="I\'m Yeoman">\n  </div>\n</header>\n\n<div class="container">\n  <div class="row">\n    <div class="col-lg-12">\n      <h1 class="page-header">Features:</h1>\n      <ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in awesomeThings">\n        <li><a href="#" tooltip="{{thing.info}}">{{thing.name}}</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n--><footer class=footer><!-- <div class="container"> \n   \n    <div ng-repeat="feed in feeds">\n	<h2><a href="{{feed.link}}" target="_blank">{{feed.title}}</a></h2>\n	<p><span ng-repeat="item in feed.entries">\n		<a href="{{item.link}}" target="_blank">{{item.title}}</a> (<span>{{item.publishedDate | date:\'d-MM-yyyy HH:mm\'}}</span>)<br />\n	</span></p>\n</div>\n   --><!--\n    <div ng-repeat="feed in feeds" > \n    <h5><a href="{{feed.link}}">{{feed.title}}</a></h5>\n <p class="text-left">{{feed.contentSnippet}}</p>\n <div class="line line-lg b-b b-light"></div>\n <div class="text-muted">\n  <i class="fa fa-clock-o text-muted"></i>\n  <span class="small">{{feed.publishedDate}}</span>\n      </div>\n    </div>\n    --><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></footer>'),a.put("app/instructions.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class=row><div class=col-lg-12><p>Hello {{ userName }}.</p><h1>Instructions</h1><p>Top Programming Blogs ranks the top blogs in the programming field based on votes by the community and website metrics.</p><h3>Log In With Facebook</h3><p>Log in with your Facebook account when prompted by the pop-up to take advantage of all the features of the app, including voting and viewing your favorite blogs.</p><h3>Click on the Thumbs Up Icon to Vote for a Blog or Remove Your Vote</h3><p>One click adds your vote and clicking again removes your vote. Blogs you have voted for will appear on your "Favorite Blogs."</p><img src=assets/images/262bd535.upvote.png width=60><h3>Click on "View Favorite Blogs" to Display Your Favorite Blogs</h3><p>To switch back to view all blogs, click on "View All Blogs."</p><button class="btn btn-primary">View My Favorite Blogs</button> <button type=button class="btn btn-info">View All Blogs</button><h3>Click on Column Headers with a Sort Icon to Order Blogs by a Specific Column</h3><p>Blogs can be ordered by title, MozRank, Page Authority, external links, and Twitter followers.</p><img src=assets/images/ed20cb3b.sort.png width=60><br><br><p>Top Programming Blogs is the capstone project of Charles Sipe for the Bloc Front-End Development Online Bootcamp. You can read more about his bootcamp experience at <a href="http://www.charlessipe.com/bloc-review/">http://www.charlessipe.com/bloc-review/</a>.</p><p>Please send feedback to Charles Sipe at csipe84(at)gmail.com.</p><footer class=footer><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></footer></div></div></div>'),a.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=.container-fluid><div class=row><div class="col-xs-12 top-section"><!--<a href="">Log In To Vote</a><br> \n    <a href="">Log Out</a> --><p>Hello {{ userName }}.</p><h2 class=headline>Ranked Blogs ranks the top blogs according to votes by the community and web metrics.</h2><div class="row homepage-row"><div class=col-md-4><div class=homepage-icon><span class="glyphicon glyphicon-thumbs-up"></span></div><h2>Vote on the top blogs.</h2></div><div class=col-md-4><div class=homepage-icon><span class="glyphicon glyphicon-circle-arrow-up"></span></div><h2>View the top blogs in your favorite subjects.</h2></div><div class=col-md-4><div class=homepage-icon><span class="glyphicon glyphicon-list-alt"></span></div><h2>See the latest article for each blog.</h2></div></div><div class="row subjects"><div class=col-xs-12><h1>Subjects</h1><p>View the top blogs from subjects of your interest.</p></div></div><div class="row subject-list"><div class=col-md-4><li><span class="glyphicon glyphicon-circle-arrow-up"></span> <a ui-sref=coding-bootcamps>Coding Bootcamps</a></li><li><span class="glyphicon glyphicon-circle-arrow-up"></span> <a ui-sref=online-marketing>Online Marketing</a></li></div><div class=col-md-4><li><span class="glyphicon glyphicon-circle-arrow-up"></span> <a ui-sref=personal-development>Personal Development</a></li><li><span class="glyphicon glyphicon-circle-arrow-up"></span> <a ui-sref=main>Programming</a></li></div><div class=col-md-4><li><span class="glyphicon glyphicon-circle-arrow-up"></span> <a ui-sref=seattle-startups>Seattle Startups</a></li></div></div><h1>Top Programming Blogs</h1><p>Top Programming Blogs ranks the top blogs in the programming field based on the votes by the community and website metrics.</p><p>Tip: Click on the <span class="glyphicon glyphicon-thumbs-up"></span> to vote for a blog.</p></div></div><div class=row><div class="col-xs-12 table-container" style="background-image: url(\'{{currentImage}}\')"><table class="table table-bordered"><thead><tr><th>Number</th><th width=10% class=sortable-column ng-click="sortBy = \'name\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Blog Title</th><th class=sortable-column ng-click="sortBy = \'-votes.length\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Votes</th><th class=sortable-column ng-click="sortBy = \'-mozrank\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Moz Rank</th><th class=sortable-column ng-click="sortBy = \'-pageauthority\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Page Authority</th><th class=sortable-column ng-click="sortBy = \'-linkingsites\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> External Links</th><th>Twitter Name</th><th class=sortable-column ng-click="sortBy = \'-twitterFollowers\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Followers</th><th>Lastest Article</th></tr></thead><tbody><tr ng-repeat="blog in blogs | orderBy: sortBy | filter:filters"><td>{{$index+1}}</td><td class=text-left><a href="{{ blog.mainUrl }}">{{ blog.name }}</a></td><td><span class="glyphicon glyphicon-thumbs-up hover-blue" data-ng-click=addVote(blog)></span> {{ blog.votes.length }}</td><td ng-init=updateBlogScore($index)>{{ blog.mozrank | number:2 }}</td><td>{{ blog.pageauthority | number:2 }}</td><td ng-init=getMozData($index)>{{ blog.linkingsites | number }}</td><td><a href="{{ blog.twitterUrl }}">{{ blog.twitterName }}</a></td><td ng-init=getTwitterCount($index)>{{ blog.twitterFollowers | number }}</td><td class=text-left ng-init=showRss($index)><a href={{blog.rssUrl}} target=_blank>{{blog.rssTitle}}</a><!-- {{blog.rssFeed}} --></td><button ng-click="filters.votes = currentUid" type=button class="btn btn-primary">View My Favorite Blogs</button> <button ng-click="filters = undefined" type=button class="btn btn-info">View All Blogs</button></tr></tbody></table></div></div><div class=row><div class="col-lg-12 suggest-blog"><p>To request a blog to be added to this list, please email csipe84(at)gmail.com.</p><!-- <p><span class="glyphicon glyphicon-plus-sign"></span> Suggest a Blog </p>\n    <form>\n      <span>Title: </span> <input type="text" ng-model="newContent" /></input><br>\n      <span>Blog URL:</span> <input type="text" ng-model="newMainUrl" /></input><br>\n      <span>Twitter: </span> <input type="text" ng-model="newTwitter" /></input><br>\n      <span>Twitter URL: </span> <input type="text" ng-model="newTwitUrl" /></input><br>\n      <span>RSS Feed: </span> <input type="text" ng-model="newRss" /></input><br>\n      <button class="add-blog" type="submit" data-ng-click="addBlog()">Add Blog</button>\n    </form>\n    <p>All fields must be filled for a new blog to be added.</p> --></div></div></div><footer class=footer><p>Ranked Blogs 2015 | <a href=https://twitter.com/charlessipe>@charlessipe</a> | A <a href="http://charlessipe.github.io/portfolio/">Charles Sipe</a> Production</p></footer>'),a.put("app/online-marketing.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=.container-fluid><div class=row><div class="col-xs-12 top-section"><!--<a href="">Log In To Vote</a><br> \n    <a href="">Log Out</a> --><p>Hello {{ userName }}.</p><h1>Top Online Marketing Blogs</h1><p>Top Online Marketing Blogs ranks the top online marketing blogs based on the votes by the community and website metrics.</p><p>Tip: Click on the <span class="glyphicon glyphicon-thumbs-up"></span> to vote for a blog.</p></div></div><div class=row><div class="col-xs-12 table-container" style="background-image: url(\'{{currentImage}}\')"><table class="table table-bordered"><thead><tr><th>Number</th><th width=10% class=sortable-column ng-click="sortBy = \'name\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Blog Title</th><th class=sortable-column ng-click="sortBy = \'-votes.length\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Votes</th><th class=sortable-column ng-click="sortBy = \'-mozrank\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Moz Rank</th><th class=sortable-column ng-click="sortBy = \'-pageauthority\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Page Authority</th><th class=sortable-column ng-click="sortBy = \'-linkingsites\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> External Links</th><th>Twitter Name</th><th class=sortable-column ng-click="sortBy = \'-twitterFollowers\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Followers</th><th>Lastest Article</th></tr></thead><tbody><tr ng-repeat="blog in onlineMarketing | orderBy: sortBy | filter:filters"><td>{{$index+1}}</td><td class=text-left><a href="{{ blog.mainUrl }}">{{ blog.name }}</a></td><td><span class="glyphicon glyphicon-thumbs-up hover-blue" data-ng-click=addVoteWild(blog)></span> {{ blog.votes.length }}</td><td>{{ blog.mozrank | number:2 }}</td><td ng-init=updateBlogScoreWild($index)>{{ blog.pageauthority | number:2 }}</td><td ng-init=getMozDataWild($index)>{{ blog.linkingsites | number }}</td><td><a href="{{ blog.twitterUrl }}">{{ blog.twitterName }}</a></td><td ng-init=getTwitterCountWild($index)>{{ blog.twitterFollowers | number }}</td><td class=text-left ng-init=showRss6($index)><a href={{blog.rssUrl}} target=_blank>{{blog.rssTitle}}</a><!-- {{blog.rssFeed}} --></td><button ng-click="filters.votes = currentUid" type=button class="btn btn-primary">View My Favorite Blogs</button> <button ng-click="filters = undefined" type=button class="btn btn-info">View All Blogs</button></tr></tbody></table></div></div><div class=row><div class="col-lg-12 suggest-blog"><p><span class="glyphicon glyphicon-plus-sign"></span> Suggest a Blog</p><form><span>Title:</span> <input ng-model="newContent"><br><span>Blog URL:</span> <input ng-model="newMainUrl"><br><span>Moz URL:</span> <input ng-model="newMozUrl"><br><span>Twitter:</span> <input ng-model="newTwitter"><br><span>Twitter URL:</span> <input ng-model="newTwitUrl"><br><span>RSS Feed:</span> <input ng-model="newRss"><br><button class=add-blog type=submit data-ng-click=addBlogWild()>Add Blog</button></form><p>All fields must be filled for a new blog to be added.</p><p>To suggest a blog to be added to this list please email csipe84(at)gmail.com</p></div></div></div><footer class=footer><p>Ranked Blogs 2015 | <a href=https://twitter.com/charlessipe>@charlessipe</a> | A <a href="http://charlessipe.github.io/portfolio/">Charles Sipe</a> Production</p></footer>'),a.put("app/personal-development.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=.container-fluid><div class=row><div class="col-xs-12 top-section"><!--<a href="">Log In To Vote</a><br> \n    <a href="">Log Out</a> --><p>Hello {{ userName }}.</p><h1>Top Personal Development Blogs</h1><p>Top Personal Development Blogs ranks the top personal development blogs based on the votes by the community and website metrics.</p><p>Tip: Click on the <span class="glyphicon glyphicon-thumbs-up"></span> to vote for a blog.</p></div></div><div class=row><div class="col-xs-12 table-container" style="background-image: url(\'{{currentImage}}\')"><table class="table table-bordered"><thead><tr><th>Number</th><th width=10% class=sortable-column ng-click="sortBy = \'name\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Blog Title</th><th class=sortable-column ng-click="sortBy = \'-votes.length\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Votes</th><th class=sortable-column ng-click="sortBy = \'-mozrank\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Moz Rank</th><th class=sortable-column ng-click="sortBy = \'-pageauthority\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Page Authority</th><th class=sortable-column ng-click="sortBy = \'-linkingsites\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> External Links</th><th>Twitter Name</th><th class=sortable-column ng-click="sortBy = \'-twitterFollowers\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Followers</th><th>Lastest Article</th></tr></thead><tbody><tr ng-repeat="blog in personalDev | orderBy: sortBy | filter:filters"><td>{{$index+1}}</td><td class=text-left><a href="{{ blog.mainUrl }}">{{ blog.name }}</a></td><td><span class="glyphicon glyphicon-thumbs-up hover-blue" data-ng-click=addVoteWild(blog)></span> {{ blog.votes.length }}</td><td>{{ blog.mozrank | number:2 }}</td><td ng-init=updateBlogScoreWild($index)>{{ blog.pageauthority | number:2 }}</td><td ng-init=getMozDataWild($index)>{{ blog.linkingsites | number }}</td><td><a href="{{ blog.twitterUrl }}">{{ blog.twitterName }}</a></td><td ng-init=getTwitterCountWild($index)>{{ blog.twitterFollowers | number }}</td><td class=text-left ng-init=showRss5($index)><a href={{blog.rssUrl}} target=_blank>{{blog.rssTitle}}</a><!-- {{blog.rssFeed}} --></td><button ng-click="filters.votes = currentUid" type=button class="btn btn-primary">View My Favorite Blogs</button> <button ng-click="filters = undefined" type=button class="btn btn-info">View All Blogs</button></tr></tbody></table></div></div><div class=row><div class="col-lg-12 suggest-blog"><p><span class="glyphicon glyphicon-plus-sign"></span> Suggest a Blog</p><p>To suggest a blog to be added to this list please email csipe84(at)gmail.com</p></div></div></div><footer class=footer><p>Ranked Blogs 2015 | <a href=https://twitter.com/charlessipe>@charlessipe</a> | A <a href="http://charlessipe.github.io/portfolio/">Charles Sipe</a> Production</p></footer>'),a.put("app/seattle-startups.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=.container-fluid><div class=row><div class="col-xs-12 top-section"><!--<a href="">Log In To Vote</a><br> \n    <a href="">Log Out</a> --><p>Hello {{ userName }}.</p><h1>Top Seattle Startup Blogs</h1><p>Top Seattle Startup Blogs ranks the top blogs in the seattle startup field based on the votes by the community and website metrics.</p><p>Tip: Click on the <span class="glyphicon glyphicon-thumbs-up"></span> to vote for a blog.</p></div></div><div class=row><div class="col-xs-12 table-container" style="background-image: url(\'{{currentImage}}\')"><table class="table table-bordered"><thead><tr><th>Number</th><th width=10% class=sortable-column ng-click="sortBy = \'name\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Blog Title</th><th class=sortable-column ng-click="sortBy = \'-votes.length\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Votes</th><th class=sortable-column ng-click="sortBy = \'-mozrank\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Moz Rank</th><th class=sortable-column ng-click="sortBy = \'-pageauthority\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Page Authority</th><th class=sortable-column ng-click="sortBy = \'-linkingsites\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> External Links</th><th>Twitter Name</th><th class=sortable-column ng-click="sortBy = \'-twitterFollowers\'"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Followers</th><th>Lastest Article</th></tr></thead><tbody><tr ng-repeat="blog in startupBlogs | orderBy: sortBy | filter:filters"><td>{{$index+1}}</td><td class=text-left><a href="{{ blog.mainUrl }}">{{ blog.name }}</a></td><td><span class="glyphicon glyphicon-thumbs-up hover-blue" data-ng-click=addVoteStartupBlogs(blog)></span> {{ blog.votes.length }}</td><td>{{ blog.mozrank | number:2 }}</td><td ng-init=updateBlogScoreStartupBlogs($index)>{{ blog.pageauthority | number:2 }}</td><td ng-init=getMozDataWild($index)>{{ blog.linkingsites | number }}</td><td><a href="{{ blog.twitterUrl }}">{{ blog.twitterName }}</a></td><td ng-init=getTwitterStartupBlogs($index)>{{ blog.twitterFollowers | number }}</td><td class=text-left ng-init=showRss3($index)><a href={{blog.rssUrl}} target=_blank>{{blog.rssTitle}}</a><!-- {{blog.rssFeed}} --></td><button ng-click="filters.votes = currentUid" type=button class="btn btn-primary">View My Favorite Blogs</button> <button ng-click="filters = undefined" type=button class="btn btn-info">View All Blogs</button></tr></tbody></table></div></div><div class=row><div class="col-lg-12 suggest-blog"><p><span class="glyphicon glyphicon-plus-sign"></span> Suggest a Blog</p><p>To suggest a blog to be added to this list please email csipe84(at)gmail.com</p></div></div></div><!--\n<header class="hero-unit" id="banner">\n  <div class="container">\n    <h1>\'Allo, Charles</h1>\n    <p class="lead">Kick-start your next web app with Angular Fullstack</p>\n    <img src="assets/images/d535427a.yeoman.png" alt="I\'m Yeoman">\n  </div>\n</header>\n\n<div class="container">\n  <div class="row">\n    <div class="col-lg-12">\n      <h1 class="page-header">Features:</h1>\n      <ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in awesomeThings">\n        <li><a href="#" tooltip="{{thing.info}}">{{thing.name}}</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n--><footer class=footer><!-- <div class="container"> \n   \n    <div ng-repeat="feed in feeds">\n	<h2><a href="{{feed.link}}" target="_blank">{{feed.title}}</a></h2>\n	<p><span ng-repeat="item in feed.entries">\n		<a href="{{item.link}}" target="_blank">{{item.title}}</a> (<span>{{item.publishedDate | date:\'d-MM-yyyy HH:mm\'}}</span>)<br />\n	</span></p>\n</div>\n   --><!--\n    <div ng-repeat="feed in feeds" > \n    <h5><a href="{{feed.link}}">{{feed.title}}</a></h5>\n <p class="text-left">{{feed.contentSnippet}}</p>\n <div class="line line-lg b-b b-light"></div>\n <div class="text-muted">\n  <i class="fa fa-clock-o text-muted"></i>\n  <span class="small">{{feed.publishedDate}}</span>\n      </div>\n    </div>\n    --><p>Angular Fullstack v2.0.13 | <a href=https://twitter.com/tyhenkel>@tyhenkel</a> | <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a></p></footer>'),
a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div class="navbar navbar-inverse navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand><span class="glyphicon glyphicon-circle-arrow-up"></span> Ranked Blogs</a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}}>{{item.title}}</a></li><li><a ui-sref=instructions>Instructions</a></li><li><a ui-sref=about>About</a></li></ul></div></div></div>')}]);