## Component Hierarchy

**Root**
 - ModalContainer
 - App

**ModalContainer**
 - ModalWrapper
    * LoginContainer
       + LoginModal
    * SignupContainer
       + SignupModal

**Home**
 - NavbarContainer
    * Navbar
 - Study
 - Library
 - Footer

**Study**
 - StudySidebarContainer
    * StudySidebar
 - BlockContainer
    * Block

**Library**
 - NavbarContainer
    * Navbar
 - MainContainer
    * Main

**Main**
 - DeckSidebarContainer
    * DeckSidebar
 - DeckView
    * DeckFormContainer
       + DeckForm
    * DeckDetailsContainer
       + DeckDetails
 - BlockView
    * BlockFormContainer
       + BlockForm
    * BlockDetailsContainer
       + BlockDetails

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Home" |
| "/study/:deckId" | "Study" |
| "/library" | "Library" |
| "/library/decks/:deckId" | "DeckDetailsContainer" |
| "/library/decks/:deckId/edit" | "DeckFormContainer" |
| "/library/decks/new" | "DeckFormContainer" |
| "/library/blocks/:blockId" | "BlockDetailsContainer" |
| "/library/blocks/:blockId/edit" | "BlockFormContainer" |
| "/library/blocks/new" | "BlockFormContainer" |
