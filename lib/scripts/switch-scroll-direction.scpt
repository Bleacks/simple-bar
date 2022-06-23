try
	tell application "System Preferences"
		activate
		set current pane to pane "com.apple.preference.trackpad"
	end tell
	delay 2
	tell application "System Events"
		tell process "System Preferences"
			click radio button "Scroll & Zoom" of tab group 1 of window "Trackpad"
			click checkbox 1 of tab group 1 of window "Trackpad"
			tell application "System Preferences" to quit
		end tell
	end tell
end try
