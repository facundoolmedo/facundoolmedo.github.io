FROM ruby:3.1-bullseye

WORKDIR /srv/jekyll

RUN apt-get update \
    ; apt-get install -y --no-install-recommends build-essential git \
    ; rm -rf /var/lib/apt/lists/*

COPY Gemfile /srv/jekyll/Gemfile

RUN bundle config set path '/usr/local/bundle' \
    ; bundle install

EXPOSE 4000 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--livereload", "--force_polling"]
