import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActions, CardContent, Grid } from "@mui/material";
import './Newsfeed.css'

const SMART_CONTRACT_ABI = require('../config');
const SMART_CONTRACT_ADDRESS = require('../config');

export class Newsfeed extends React.Component {
    render() {
        return (

            <div className="app">
                <div className="header">Newsfeed</div>

                <div className="container">
                    <div className="column">
                        <article className="article">
                            <h3 className="article__category">News</h3>
                            <h2 className="article__title">What is Lorem Ipsum?</h2>
                            <p className="article__excerpt">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus magna vel malesuada euismod.
                                Sed vestibulum mollis nisl, ut varius ante venenatis nec. Aliquam erat volutpat. Maecenas posuere molestie nisl, viverra ullamcorper tortor eleifend placerat.
                                Nunc sit amet sollicitudin sapien. 
                            </p>
                        </article>
                    </div>
                    <div className="column">
                        <article className="article">
                            <h3 className="article__category">Blockchain</h3>
                            <h2 className="article__title">Why do we use it?</h2>
                            <p className="article__excerpt">
                                Fusce et aliquet nisi, ac fermentum metus.
                                Proin rutrum, purus sed rhoncus bibendum, nisi mauris fringilla urna, non tempus elit leo non nunc.
                                Pellentesque vulputate dui vitae venenatis rhoncus. Quisque mattis quam dui, eu volutpat purus pharetra in. Suspendisse posuere lacinia urna vel luctus.
                            </p>
                        </article>
                    </div>
                    
                    <div className="column">
                        <article className="article">
                            <h3 className="article__category">Front-end</h3>
                            <h2 className="article__title">Where does it come from?</h2>
                            <p className="article__excerpt">
                                Nam vulputate imperdiet rhoncus. Pellentesque ipsum tellus, dictum eu suscipit sed, dictum nec eros.
                                Nunc non dui semper, commodo ipsum sit amet, consequat metus. Quisque ut semper lacus.
                                Proin massa est, dictum nec mattis a, lobortis eget nulla.
                                Curabitur erat augue, hendrerit sit amet enim et, fringilla dignissim ante.
                            </p>
                        </article>
                    </div>

                    <div className="column">
                        <article className="article">
                            <h3 className="article__category">Front-end</h3>
                            <h2 className="article__title">Where does it come from?</h2>
                            <p className="article__excerpt">
                                Nam vulputate imperdiet rhoncus. Pellentesque ipsum tellus, dictum eu suscipit sed, dictum nec eros.
                                Nunc non dui semper, commodo ipsum sit amet, consequat metus. Quisque ut semper lacus.
                                Proin massa est, dictum nec mattis a, lobortis eget nulla.
                                Curabitur erat augue, hendrerit sit amet enim et, fringilla dignissim ante.
                            </p>
                        </article>
                    </div>

                    <div className="column">
                        <article className="article">
                            <h3 className="article__category">Front-end</h3>
                            <h2 className="article__title">Where does it come from?</h2>
                            <p className="article__excerpt">
                                Nam vulputate imperdiet rhoncus. Pellentesque ipsum tellus, dictum eu suscipit sed, dictum nec eros.
                                Nunc non dui semper, commodo ipsum sit amet, consequat metus. Quisque ut semper lacus.
                                Proin massa est, dictum nec mattis a, lobortis eget nulla.
                                Curabitur erat augue, hendrerit sit amet enim et, fringilla dignissim ante.
                            </p>
                        </article>
                    </div>

                    <div className="column">
                        <article className="article">
                            <h3 className="article__category">Front-end</h3>
                            <h2 className="article__title">Where does it come from?</h2>
                            <p className="article__excerpt">
                                Nam vulputate imperdiet rhoncus. Pellentesque ipsum tellus, dictum eu suscipit sed, dictum nec eros.
                                Nunc non dui semper, commodo ipsum sit amet, consequat metus. Quisque ut semper lacus.
                                Proin massa est, dictum nec mattis a, lobortis eget nulla.
                                Curabitur erat augue, hendrerit sit amet enim et, fringilla dignissim ante.
                            </p>
                        </article>
                    </div>
                </div>

            </div>


        );
    }
}


// class App extends React.Component {
//     render() {
//       return (
//         articles: {
//             'article': {
//                 "color": "FEC006",
//                 "title": "Snow in Turkey Brings Travel Woes",
//                 "thumbnail": "",
//                 "category": "News",
//                 "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed"
//             },
//             'article-1': {
//                 "color": "2196F3",
//                 "title": "Landslide Leaving Thousands Homeless",
//                 "thumbnail": "",
//                 "category": "News",
//                 "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets."
//             },
//             'article-2': {
//                 "color": "FE5621",
//                 "title": "Hail the size of baseballs in New York",
//                 "thumbnail": "",
//                 "category": "News",
//                 "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens."
//             },
//             'article-3': {
//                 "color": "673AB7",
//                 "title": "Earthquake destorying San Fransisco",
//                 "thumbnail": "",
//                 "category": "News",
//                 "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater."
//             }
//         }
//       );
//     }
//   }

// var App = React.createClass({
//     getInitialState: function () {
//         return {
//             articles: {
//                 'article': {
//                     "color": "FEC006",
//                     "title": "Snow in Turkey Brings Travel Woes",
//                     "thumbnail": "",
//                     "category": "News",
//                     "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
//                     "date": new Date()
//                 },
//                 'article-1': {
//                     "color": "2196F3",
//                     "title": "Landslide Leaving Thousands Homeless",
//                     "thumbnail": "",
//                     "category": "News",
//                     "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
//                     "date": new Date()
//                 },
//                 'article-2': {
//                     "color": "FE5621",
//                     "title": "Hail the size of baseballs in New York",
//                     "thumbnail": "",
//                     "category": "News",
//                     "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
//                     "date": new Date()
//                 },
//                 'article-3': {
//                     "color": "673AB7",
//                     "title": "Earthquake destorying San Fransisco",
//                     "thumbnail": "",
//                     "category": "News",
//                     "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
//                     "date": new Date()
//                 }
//             }
//         }
//     },
//     renderArticle: function (key) {
//         return (
//             <div className="column">
//                 <Article key={key} index={key} details={this.state.articles[key]} />
//             </div>
//         )
//     },
//     render: function () {
//         return (
//             <div className="app">
//                 <div className="container">
//                     {Object.keys(this.state.articles).map(this.renderArticle)}
//                 </div>
//             </div>
//         )
//     }
// });

// var Article = React.createClass({
//     render: function () {
//         var details = this.props.details,
//             styles = {
//                 backgroundColor: '#' + details.color
//             };

//         return (
//             <article className="article">
//                 <h3 className="article__category" style={styles}>{details.category}</h3>
//                 <h2 className="article__title">{details.title}</h2>
//                 <p className="article__excerpt">{details.excerpt}</p>
//             </article>
//         )
//     }
// });