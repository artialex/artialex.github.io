# MIDI

Standard MIDI File (SMF)

	smf = <header> 
		+ <track>
	  [ + <track> ]

Header chunk structure

	header = "MThd" # Literal string "MThd" 
					# indicating that this is a MIDI file 	
		   + <header_length> # Length of the header chunk
		   + <format> # 0 = single track file format
		   			  # 1 = multiple track file format
					  # 2 = multipe song file format
		   + <n> # Number of tracks
		   + <division> # Unit of time for delta timing
						# Positive means Ticks Per Beat
						# Negative means SMPTE

Track chunk structure						
	
	track = "MTrk"
		  + <length> # Length in bytes
		  + <track_event>
		  
Track event structure		
	
	track_event = <v_time>      # Delta time
	            + <midi_event>  # MIDI channel message
		        | <meta_event>  # SMF Meta Event
		        | <sysex_event> # SMF system exclusive event

Midi Event

Meta Event

	meta_event = 0xFF
			   + <meta_type>
			   + <v_length>
			   + <event_data_bytes>

Sysex Event 

	sysex_event = 0xF0 | 0xF7
				  + <data_bytes> 0xF7