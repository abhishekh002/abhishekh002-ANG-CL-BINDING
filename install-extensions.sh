
#!/bin/bash
cat << 'EOF' >.vscode/settings.json
{
    "extensions.ignoreRecommendations": true
}
EOF
cat << 'EOF' > .git/hooks/post-commit
#!/bin/bash
git push
git log -1 --shortstat > history_log.txt
EOF
chmod +x .git/hooks/post-commit
code --uninstall-extension revaturePro.revature-labs && code --uninstall-extension redhat.java && code --uninstall-extension vscjava.vscode-java-debug
code --install-extension revaturePro.revature-angular-labs