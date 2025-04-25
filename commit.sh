#!/bin/bash
# adds the changed files
read -p "what files?: " updatedFiles
if [ -z "$updatedFiles" ]; then
    git add *
else
    git add $updatedFiles
fi

# ask what
read -p "what changed?: " commitChanges

# says whats changed
if [ -z "$commitChanges" ]; then
    git commit -m "cant be bothered to enter what"
else
    git commit -m "$commitChanges"
fi

# pushes them to the repo
git push --force

echo
echo its updated
read -p "Press enter to continue"
