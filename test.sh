echo "Generating symlink to local jade...\n"
node main.js

echo "Executing jade with 'li test'...\n"
echo "li test" | jade

# cleanup
rm gulp
rm jade
rm mocha
rm _mocha
