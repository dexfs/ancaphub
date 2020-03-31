import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '../../../components/ui/Container';
import Hero from '../../../components/ui/Hero';
import BookCard from '../../../components/library/books/BookCard';

// i18n

export default (props) => (
  <Container>
    <Hero
      title="Livros"
      description="Descrição de livros"
    />
    <div style={{
      display: 'grid', gap: '1em', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', marginTop: 25,
    }}
    >
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>

  </Container>
);
