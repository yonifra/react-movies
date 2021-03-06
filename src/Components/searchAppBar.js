import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CardsContainer from './cardsContainer';
import {Route, Switch} from 'react-router-dom';
import MovieDetails from './movieDetails'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  form: {
    margin: '0'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [movie, ] = useState({});

  const searchMovies = async (e) => {
      e.preventDefault(); // prevents refreshing

      const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${document.getElementById('searchField').value}&page=1&include_adult=false`;

      try {
          const res = await fetch(url);
          const data = await res.json()
          await setMovies(data.results)
      } catch (error) {
          console.error(error)
      }
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Movie Search
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={searchMovies} className={classes.form}>
                <InputBase
                  placeholder="Movie name"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  id="searchField"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </form>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className="container">
        <Switch>
          <Route component={() => <MovieDetails movie={movie}/>} path="/movie"  />
          <Route component={() => <CardsContainer movies={movies} />} path="/" />
        </Switch>
      </div>
      </>
      );
}

      // <!-- <CardsContainer movies={movies} /> -->