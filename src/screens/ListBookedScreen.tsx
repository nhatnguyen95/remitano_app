import Container from 'components/atoms/Container';
import MovieTemplate from 'components/templates/MovieTemplate';
import {TEST_ID} from 'configs/Constants';
import useBooking from 'hooks/useBooking';
import React from 'react';
import {selectBookedMovies} from 'store/slices/moviesSlice';
import {useAppSelector} from 'store/store';

const ListBookedScreen: React.FC = () => {
  const bookedMovies = useAppSelector(selectBookedMovies);
  console.log(
    'bookedMovies',
    bookedMovies.map(i => i.id),
  );
  const {navigateToBookingScreen} = useBooking();
  return (
    <Container>
      <MovieTemplate
        testID={TEST_ID['list-booked']}
        movies={bookedMovies}
        onBooking={navigateToBookingScreen}
      />
    </Container>
  );
};

export default ListBookedScreen;
